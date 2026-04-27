<template>
  <div class="container">

    <h1>I tuoi animali 🐾</h1>

    <div class="grid">
      <PetCard v-for="pet in pets" :key="pet.id" :pet="pet" />
    </div>

  </div>
</template>

<script setup>
import PetCard from '../components/PetCard.vue'

const pets = [
  {
    id: 1,
    name: 'Luna',
    breed: 'Labrador',
    image: 'https://placedog.net/300',
    allergies: 'Nessuna',
    microchip: '123456',
    notes: 'Paurosa',
    phone: '+39123456789'
  },
  {
    id: 2,
    name: 'Rocky',
    breed: 'Bulldog',
    image: 'https://placedog.net/301',
    allergies: 'Polline',
    microchip: '987654',
    notes: 'Molto socievole',
    phone: '+39111111111'
  }
]
</script>

<style scoped>
.container {
  padding: 20px;
}

h1 {
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  justify-items: center;
}
</style>