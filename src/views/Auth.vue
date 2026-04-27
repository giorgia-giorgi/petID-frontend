<template>
  <div class="page">

    <!-- 🐾 BACKGROUND ANIMALI -->
    <div
      v-for="(img, i) in images"
      :key="i"
      class="bg"
      :class="{ active: i === index }"
      :style="{ backgroundImage: `url(${img})` }"
    ></div>

    <div class="overlay"></div>

    <!-- 🃏 CARD CENTRALE -->
    <div class="card">

      <div class="header">
        <div class="logo">🐾 PetSafe</div>

        <h1>{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
      </div>

      <!-- FORM -->
      <form @submit.prevent="submit">

        <input 
          v-if="mode === 'register'"
          type="text"
          placeholder="Nome"
          v-model="name"
        />

        <input 
          type="email"
          placeholder="Email"
          v-model="email"
        />

        <input 
          v-if="mode !== 'forgot'"
          type="password"
          placeholder="Password"
          v-model="password"
        />

        <button type="submit">
          {{ buttonText }}
        </button>

      </form>

      <!-- AZIONI -->
      <div class="links">

        <span v-if="mode === 'login'">
          Non hai un account?
          <b @click="mode = 'register'">Registrati</b>
        </span>

        <span v-if="mode === 'register'">
          Hai già un account?
          <b @click="mode = 'login'">Accedi</b>
        </span>

        <span v-if="mode === 'login'" class="forgot">
          <b @click="mode = 'forgot'">Password dimenticata?</b>
        </span>

        <span v-if="mode === 'forgot'">
          Torna al
          <b @click="mode = 'login'">login</b>
        </span>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const mode = ref('login')

const name = ref('')
const email = ref('')
const password = ref('')

/* 🧠 testi intelligenti */
const title = computed(() => {
  if (mode.value === 'login') return 'Accedi'
  if (mode.value === 'register') return 'Crea account'
  return 'Recupera password'
})

const subtitle = computed(() => {
  if (mode.value === 'login') return 'Accedi per gestire i tuoi animali'
  if (mode.value === 'register') return 'Inizia a proteggere il tuo animale'
  return 'Ti invieremo un link via email'
})

const buttonText = computed(() => {
  if (mode.value === 'login') return 'Accedi'
  if (mode.value === 'register') return 'Registrati'
  return 'Invia email'
})

/* 🔐 utente già loggato */
onMounted(() => {
  const user = localStorage.getItem('user')
  if (user) router.push('/pets')
})

function submit() {
  if (mode.value === 'login') login()
  if (mode.value === 'register') register()
  if (mode.value === 'forgot') forgot()
}

function login() {
  if (!email.value || !password.value) return alert('Compila i campi')
  localStorage.setItem('user', JSON.stringify({ email: email.value }))
  router.push('/pets')
}

function register() {
  if (!name.value || !email.value || !password.value)
    return alert('Compila tutto')
  localStorage.setItem('user', JSON.stringify({ email: email.value }))
  router.push('/pets')
}

function forgot() {
  if (!email.value) return alert('Inserisci email')
  alert('Email inviata (simulazione)')
}

/* 🐾 BACKGROUND DINAMICO */
const images = [
  "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
  "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308"
]

const index = ref(0)
let interval

onMounted(() => {
  interval = setInterval(() => {
    index.value = (index.value + 1) % images.length
  }, 6000)
})

onBeforeUnmount(() => clearInterval(interval))
</script>

<style scoped>
/* 🌍 FULL SCREEN */
.page {
  position: fixed;
  inset: 0;
  font-family: "Inter", system-ui, sans-serif;
}

/* 🐾 BACKGROUND */
.bg {
  position: absolute;
  inset: 0;

  background-size: cover;
  background-position: center;

  opacity: 0;
  transform: scale(1.1);

  transition: opacity 1.2s ease, transform 6s ease;
}

.bg.active {
  opacity: 1;
  transform: scale(1.15);
}

/* overlay elegante */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.7);
}

/* 🃏 CARD PERFETTAMENTE CENTRATA */
.card {
  position: relative;
  z-index: 2;

  width: 360px;
  padding: 32px;

  border-radius: 20px;

  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);

  box-shadow: 0 25px 50px rgba(0,0,0,0.25);

  /* 👇 QUESTO LA CENTRA DAVVERO */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* HEADER */
.header {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  font-weight: 700;
  margin-bottom: 6px;
}

h1 {
  font-size: 26px;
  font-weight: 800;
  color: #111827;
}

.subtitle {
  font-size: 14px;
  color: #6b7280;
}

/* FORM */
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
}

button {
  margin-top: 10px;
  padding: 12px;

  border: none;
  border-radius: 12px;

  background: #fbbf24;
  color: #111827;

  font-weight: 700;
  cursor: pointer;
}

/* LINKS */
.links {
  margin-top: 18px;
  text-align: center;
  font-size: 14px;
}

.links b {
  cursor: pointer;
  color: #2563eb;
}

.forgot {
  display: block;
  margin-top: 6px;
}
</style>