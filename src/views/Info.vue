<template>
  <div class="page" :style="{ backgroundImage: `url(${bg})` }">

    <div class="overlay"></div>

    <div class="content">

      <h1>Profilo Animale</h1>

      <form class="form" @submit.prevent="submitForm">

        <div class="steps">
          Step {{ step }} / 5
        </div>

        <!-- STEP 1 -->
        <section v-if="step === 1">
          <h2>🐾 Animale</h2>

          <div class="row">
            <div class="field">
              <label>Nome *</label>
              <input v-model="form.nome" />
            </div>

            <div class="field">
              <label>Tipo animale *</label>
              <select v-model="form.tipoAnimale">
                <option value="">Seleziona</option>
                <option>Cane</option>
                <option>Gatto</option>
                <option>Coniglio</option>
                <option>Cavallo</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label>Foto *</label>
            <input type="file" accept="image/*" @change="handleFile" />
            <img v-if="preview" :src="preview" class="preview" />
          </div>
        </section>

        <!-- STEP 2 -->
        <section v-if="step === 2">
          <h2>❤️ Salute</h2>

          <div class="row">
            <div class="field">
              <label>Microchip *</label>
              <select v-model="form.microchip">
                <option value="">Seleziona</option>
                <option>Si</option>
                <option>No</option>
              </select>
            </div>

            <div class="field">
              <label>Sterilizzato</label>
              <select v-model="form.sterilizzato">
                <option value="">Seleziona</option>
                <option>Si</option>
                <option>No</option>
              </select>
            </div>
          </div>
        </section>

        <!-- STEP 3 -->
        <section v-if="step === 3">
          <h2>✨ Segni particolari</h2>

          <div class="field">
            <label>Descrizione *</label>
            <textarea v-model="form.descrizione"></textarea>
          </div>
        </section>

        <!-- STEP 4 -->
        <section v-if="step === 4">
          <h2>📞 Contatti</h2>

          <div class="field">
            <label>Email *</label>
            <input type="email" v-model="form.email" />
          </div>

          <div class="field">
            <label>Telefono *</label>
            <input v-model="form.telefono" />
          </div>
        </section>

        <!-- STEP 5 -->
        <section v-if="step === 5">
          <h2>📣 Emergenza</h2>

          <div class="field">
            <label>Cosa fare</label>
            <textarea v-model="form.emergenza_cosa_fare"></textarea>
          </div>
        </section>

        <!-- NAV -->
        <div class="nav">
          <button type="button" @click="prevStep" v-if="step > 1">
            Indietro
          </button>

          <button type="button" @click="nextStep" v-if="step < 5">
            Avanti
          </button>

          <button type="submit" v-if="step === 5">
            Salva
          </button>
        </div>

      </form>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import bg from '@/assets/SfondoPet.jpeg'

const step = ref(1)

const form = reactive({
  nome: '',
  tipoAnimale: '',
  descrizione: '',
  foto: null,
  microchip: '',
  sterilizzato: '',
  allergie: '',
  farmaci: '',
  email: '',
  telefono: '',
  prefisso: '+39',
  emergenza_cosa_fare: '',
  emergenza_cosa_non_fare: '',
  emergenza_consigli: ''
})

const preview = ref(null)
const previewSpecial1 = ref(null)
const previewSpecial2 = ref(null)
const previewSpecial3 = ref(null)

/* STEP NAV */
const nextStep = () => {
  if (!validateStep()) return
  step.value++
}

const prevStep = () => step.value--

const validateStep = () => {
  if (step.value === 1 && (!form.nome || !form.tipoAnimale || !form.foto)) return false
  if (step.value === 2 && !form.microchip) return false
  if (step.value === 3 && !form.descrizione) return false
  if (step.value === 4 && (!form.email || !form.telefono)) return false
  return true
}

/* FILE */
const handleFile = e => {
  const file = e.target.files[0]
  if (!file) return
  preview.value = URL.createObjectURL(file)
  form.foto = file
}

const handleSpecial1 = e => previewSpecial1.value = URL.createObjectURL(e.target.files[0])
const handleSpecial2 = e => previewSpecial2.value = URL.createObjectURL(e.target.files[0])
const handleSpecial3 = e => previewSpecial3.value = URL.createObjectURL(e.target.files[0])

const submitForm = () => {
  if (!validateStep()) return
  console.log("FINAL DATA:", form)
}
</script>

<style scoped>
.page {
  position: fixed;
  inset: 0;
  background-size: cover;
  background-position: center;
  font-family: system-ui;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

/* 🔥 overlay più elegante */
.overlay {
  position: absolute;
  inset: 0;

  background: rgba(10, 10, 10, 0.55); /* scuro soft */
  backdrop-filter: blur(3px);
}

/* contenuto centrato vero */
.content {
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 🔥 CENTRATO VERO */
}

/* card form */
.form {
  width: 150%;

  background: rgba(255, 255, 255, 0.92);
  border-radius: 18px;

  padding: 25px;

  box-shadow: 0 10px 40px rgba(0,0,0,0.25);
}

/* TITOLI */
h1 {
  color: #fff;
  margin-bottom: 15px;
  font-weight: 900;
}

h2 {
  color: #111;
  font-weight: 800;
}

label {
  color: #000;
}

/* STEP */
.steps {
  text-align: center;
  font-weight: 700;
  margin-bottom: 15px;
  color: #111;
}

/* layout */
.row {
  display: flex;
  gap: 12px;
}

.field {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

/* input */
input, textarea, select {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #eab308;
  outline: none;
}

input[type="file"] {
  color: #000;
}

/* NAV */
.nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
}

/* BOTTONI GIALLO BRAND */
button {
  padding: 10px 18px;
  border-radius: 12px;
  border: none;

  background: #facc15;
  color: #111;
  font-weight: 800;

  cursor: pointer;
}

button:hover {
  background: #eab308;
}

/* IMMAGINI */
.preview {
  width: 120px;
  margin-top: 10px;
  border-radius: 10px;
}
</style>