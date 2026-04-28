<template>
  <div>
    <h3>QR Code del tuo animale</h3>

    <img :src="qrImage" v-if="qrImage" />

    <button @click="generateQR">
      Genera QR
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"
import QRCode from "qrcode"

const qrImage = ref("")

const animalId = 48392 // poi sarà dinamico dal backend

const generateQR = async () => {
  const url = `https://tuodominio.com/emergency/${animalId}`

  qrImage.value = await QRCode.toDataURL(url)
}
</script>