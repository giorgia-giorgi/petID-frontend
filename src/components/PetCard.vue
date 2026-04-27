


<template>
  <div class="card">

    <img :src="props.pet.image" />

    <h2 class="name">{{ props.pet.name }} 🐶</h2>
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
</template>
<script setup>
import { ref } from 'vue'
import { PhoneIcon, ChevronDoubleDownIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  pet: Object
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

function callOwner() {
  window.location.href = `tel:${props.pet.props.pet.phone}`
}
</script>

<style scoped>
.card {
  background: white;
  width: 320px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  margin: auto;
  margin-top: 50px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
}

.breed {
  color: #777;
  margin-bottom: 10px;
}

.arrow {
  font-size: 24px;
  cursor: pointer;
}

.rotate {
  display: inline-block;
  transform: rotate(180deg);
  transition: 0.3s;
}

.details {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  text-align: left;
  color: #000000;
}

.details.open {
  max-height: 300px;
    color: #000000;

}

button {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  background: black;
  color: white;
  cursor: pointer;
}

.name {
  color: #000000;
  margin: 10px 0 5px;
}

.icon {
    width: 10%;
    color: black;
}

.icon-small {
    width: 10%;
    color: white;
    width: 18px;
    height: 18px;
}

.call-owner {
    background: green;
    display: flex; 
    align-items: center;
    justify-content: center;
    gap: 8px;
}
</style>