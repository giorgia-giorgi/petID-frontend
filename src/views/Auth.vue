<template>
  <div class="page">

    <div class="bg"></div>
    <div class="overlay"></div>

    <!-- CARD -->
    <div class="card">

      <!-- TOP BRAND -->
      <div class="brand">🐾 PetSafe</div>

      <!-- TITLE -->
      <h1 class="title">{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>

      <!-- FORM -->
      <form @submit.prevent="submit" class="form">

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

      <!-- LINKS -->
      <div class="links">

        <span v-if="mode === 'login'">
          Non hai un account?
          <b @click="mode = 'register'">Registrati</b>
        </span>

        <span v-if="mode === 'register'" class="links-dark">
         Hai già un account?
        <b @click="mode = 'login'">Accedi</b>
        </span>

       

        <span v-if="mode === 'login'">
          <b class="forgot" @click="mode = 'forgot'">Password dimenticata?</b>
        </span>

        <span v-if="mode === 'forgot'">
          Torna al <b @click="mode = 'login'">login</b>
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
</script>

<style scoped>
/* 🌍 FULL SCREEN */
.page {
  position: fixed;
  inset: 0;
  font-family: system-ui, sans-serif;
}

/* SFONDO (neutro pulito) */
.bg {
  position: absolute;
  inset: 0;
  background: #f5f7fb;
}

/* overlay leggerissimo */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.08);
}

/* CARD */
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  width: 380px;
  padding: 28px;

  border-radius: 18px;
  background: white;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);

  text-align: left;
}

/* BRAND */
.brand {
  font-weight: 700;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 10px;
}

/* TITLE */
.title {
  font-size: 26px;
  font-weight: 800;
  margin: 0;
}

.subtitle {
  font-size: 14px;
  color: #6b7280;
  margin-top: 6px;
  margin-bottom: 20px;
}

/* FORM CENTRATO */
.form {
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
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: #fbbf24;
  font-weight: 700;
  cursor: pointer;
}

/* LINKS */
.links {
  margin-top: 16px;
  font-size: 13px;
  text-align: center;
}

.links b {
  cursor: pointer;
  color: inherit;
}

.forgot {
  display: inline-block;
  margin-top: 6px;
}

.text-dark {
  color: #111827; /* nero quasi pieno ma elegante */
}

.links-dark {
  color: #111827;
}

.links-dark b {
  color: #111827;
  font-weight: 700;
}
</style>