<template>
  <div class="page">

    <!-- BACKGROUND SLIDES -->
    <div
      v-for="(img, i) in images"
      :key="i"
      class="bg"
      :class="{ active: i === index }"
      :style="{ backgroundImage: `url(${img})` }"
    ></div>

    <!-- OVERLAY -->
    <div class="overlay"></div>

    <!-- HEADER -->
    <header class="header">
      <div class="logo">🐾 PetSafe</div>

      <div class="actions">
        <button class="primary" @click="go('/auth')">Accedi</button>
    </div>
    </header>

    <!-- HERO -->
    <main class="hero">

      <div class="content">

        <h1>La carta d'identità del tuo animale</h1>

        <p>
            Se il tuo animale si allontana, chi lo trova deve poter capire subito chi è e come riportarlo a casa. <br> 
            Con un semplice QR code sul collare, tutte le informazioni importanti sono sempre disponibili.
        </p>

        <div class="grid">
          <div>📛 Nome e razza</div>
          <div>📸 Foto del pet</div>
          <div>⚠️ Allergie</div>
          <div>💉 Microchip</div>
          <div>📍 Contatti padrone</div>
          <div>🎾 Carattere</div>
        </div>

        <button class="cta" @click="go('/auth')">
        🐾 Crea profilo animale
        </button>

        <div class="qr">
          🔎 QR Code sul collare: “Mi sono perso? Scansiona qui”
        </div>

      </div>

    </main>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const go = (p) => router.push(p);

const images = [
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=2400&q=80"
];

const index = ref(0);

let interval;

onMounted(() => {
  interval = setInterval(() => {
    index.value = (index.value + 1) % images.length;
  }, 5000);
});

onBeforeUnmount(() => clearInterval(interval));
</script>

<style>
/* 🔒 BLOCCO ASSOLUTO SCROLL ORIZZONTALE */
html, body {
  margin: 0;
  padding: 0;

  width: 100%;
  height: 100%;

  overflow-x: hidden;   /* 👈 chiave */
  overflow-y: hidden;

  font-family: "Inter", system-ui, sans-serif;
}

/* 🧱 PAGE FULL SCREEN PERFETTO */
.page {
  position: fixed;   /* 👈 elimina problemi viewport */
  inset: 0;

  overflow: hidden;

  color: white;
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

/* HEADER */
.header {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 60px;
}

.logo {
  font-weight: 700;
}

/* HERO CENTRATO */
.hero {
  position: relative;
  z-index: 2;

  height: calc(100vh - 100px);

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  padding: 0 20px;
}

/* CONTENT */
.content {
  max-width: 850px;
}

/* TITLE FORTE */
h1 {
  font-size: 58px;
  font-weight: 800;
  letter-spacing: -1.2px;
  line-height: 1.05;
}

p {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 20px;
  line-height: 1.6;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 28px;
}

.grid div {
  background: rgba(255,255,255,0.08);
  padding: 12px;
  border-radius: 12px;
  font-size: 14px;
}

/* CTA */
.cta {
  background: #fbbf24;
  color: #111827;

  border: none;
  padding: 16px 22px;
  border-radius: 14px;

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
}

/* QR */
.qr {
  margin-top: 16px;
  font-size: 14px;
  opacity: 0.85;
}

/* BUTTONS */
.actions {
  display: flex;
  gap: 10px;
}

.primary {
  background: #fbbf24;
  border: none;
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  color: #111827;
}

.ghost {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
}

/* 📱 MOBILE */
@media (max-width: 768px) {
  h1 {
    font-size: 38px;
  }

  .grid {
    grid-template-columns: 1fr 1fr;
  }

  .header {
    padding: 18px 20px;
  }
}
</style>