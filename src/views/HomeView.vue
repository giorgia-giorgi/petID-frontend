<template>
  <div class="page">

    <!-- BACKGROUND -->
    <div class="bg"></div>
    <div class="overlay"></div>

    <!-- CONTENT -->
    <div class="container">

      <h1>I tuoi animali 🐾</h1>

      <div class="grid">
        <PetCard v-for="pet in pets" :key="pet.id" :pet="pet" />
      </div>

    </div>

  </div>
</template>

<script setup>
import PetCard from '../components/PetCard.vue'

const pets = [
  {
    id: 1,
    name: 'Luna',
    breed: 'Golden Retriever',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1',
    allergies: 'Nessuna',
    microchip: 'IT123456',
    notes: 'Molto affettuosa',
    phone: '+39123456789'
  },
  {
    id: 2,
    name: 'Milo',
    breed: 'British Shorthair',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
    allergies: 'Polline',
    microchip: 'IT987654',
    notes: 'Ama dormire',
    phone: '+39111111111'
  },
  {
    id: 3,
    name: 'Nina',
    breed: 'Meticcio',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
    allergies: 'Grano',
    microchip: 'IT564738',
    notes: 'Molto energica',
    phone: '+39333111222'
  },
  {
    id: 4,
    name: 'Oliver',
    breed: 'Gatto europeo',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    allergies: 'Nessuna',
    microchip: 'IT111222',
    notes: 'Curioso e indipendente',
    phone: '+39333999888'
  },
  {
    id: 5,
    name: 'Bunny',
    breed: 'Coniglio nano',
    image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308',
    allergies: 'Verdure specifiche',
    microchip: 'IT444555',
    notes: 'Timido ma dolce',
    phone: '+39333222111'
  },
  {
    id: 6,
    name: 'Rocky',
    breed: 'Bulldog',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
    allergies: 'Polline',
    microchip: 'IT778899',
    notes: 'Protettivo',
    phone: '+39333444555'
  },
  {
    id: 7,
    name: 'Bella',
    breed: 'Labrador',
    image: 'https://images.unsplash.com/photo-1601758123927-1960b6a1f3d1',
    allergies: 'Nessuna',
    microchip: 'IT998877',
    notes: 'Sempre felice',
    phone: '+39333666777'
  },
  {
    id: 8,
    name: 'Kitty',
    breed: 'Siamese',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    allergies: 'Pesce',
    microchip: 'IT223344',
    notes: 'Molto elegante',
    phone: '+39333888999'
  }
]
</script>

<style scoped>

/* BODY */
:global(body) {
  margin: 0;
  font-family: "Inter", system-ui, sans-serif;
}

/* PAGE */
.page {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

/* BACKGROUND */
.bg {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, #0db2e9, transparent 40%),
    radial-gradient(circle at 80% 30%, #035ed4, transparent 45%),
    radial-gradient(circle at 50% 80%, #f8fafc, transparent 50%),
    linear-gradient(135deg, #2b5279, #3966c0);
}

.overlay {
  position: fixed; /* 🔥 fix */
  inset: 0;
  background: rgb(233, 174, 13);
}

/* CONTAINER */
.container {
  position: relative;
  z-index: 2;

  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 20px;
}

/* TITLE */
h1 {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 25px;
  color: #000000;
}

/* GRID */
.grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr); /* 🔥 2 per riga */
  gap: 20px;

  width: 100%;
  max-width: 900px;
}

/* MOBILE */
@media (max-width: 700px) {
  .grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 28px;
  }
}

</style>