<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">
    <div class="overlay"></div>
    <div class="content">
      <h1>Accedi</h1>

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
import bg from '@/assets/SfondoPet.jpeg'
import '@/assets/form.css'

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

