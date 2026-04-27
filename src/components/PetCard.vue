<template>
  <div class="page">

    <!-- 🌫 OVERLAY -->
    <div class="overlay"></div>

    <!-- CARD -->
    <div class="card">

      <img :src="props.pet.image" />

      <h2 class="name">{{ props.pet.name }} 🐾</h2>
      <div class="breed">{{ props.pet.breed }}</div>

      <div class="arrow" @click="toggle">
        <ChevronDoubleDownIcon class="icon" :class="{ rotate: isOpen }" />
      </div>

      <div class="details" :class="{ open: isOpen }">
        <p><b>Allergie:</b> {{ props.pet.allergies }}</p>
        <p><b>Microchip:</b> {{ props.pet.microchip }}</p>
        <p><b>Note:</b> {{ props.pet.notes }}</p>

        <button class="call-owner" @click="callOwner">
          <PhoneIcon class="icon-small" />
          Contatta proprietario
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { PhoneIcon, ChevronDoubleDownIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  pet: Object
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

/* 🐾 FIX BUG TELEFONO */
function callOwner() {
  window.location.href = `tel:${props.pet.phone}`
}

</script>

<style>
/* 🔤 FONT COERENTE CON LANDING */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: "Inter", system-ui, sans-serif;
}

/* 🌍 PAGE FULL SCREEN */
.page {
  position: fixed;
  inset: 0;
  overflow: hidden;
}

/* 🖼 BACKGROUND */
.bg {
  position: absolute;
  inset: 0;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0;
  transform: scale(1.1);

  transition: opacity 1.4s ease, transform 6s ease;
}

.bg.active {
  opacity: 1;
  transform: scale(1.18);
}

/* 🌫 OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(17, 24, 39, 0.55),
    rgba(2, 6, 23, 0.92)
  );
}

/* 🃏 CARD MODERNA */
.card {
  position: relative;
  z-index: 2;

  width: 340px;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);

  padding: 22px;
  border-radius: 20px;

  text-align: center;

  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);

  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
}

/* IMAGE */
img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
}

/* TEXT */
.name {
  color: #111827;
  margin: 10px 0 5px;
  font-weight: 800;
}

.breed {
  color: #6b7280;
  margin-bottom: 10px;
}

/* ARROW */
.arrow {
  cursor: pointer;
  margin-top: 10px;
}

.icon {
  width: 22px;
  color: #111827;
}

.rotate {
  transform: rotate(180deg);
  transition: 0.3s;
}

/* DETAILS */
.details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  text-align: left;
  color: #111827;
}

.details.open {
  max-height: 300px;
  margin-top: 10px;
}

/* BUTTON */
button {
  width: 100%;
  padding: 12px;
  margin-top: 10px;

  border: none;
  border-radius: 12px;

  background: #111827;
  color: white;

  cursor: pointer;
}

/* CALL BUTTON */
.call-owner {
  background: #16a34a;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.icon-small {
  width: 18px;
  height: 18px;
  color: white;
}
</style>