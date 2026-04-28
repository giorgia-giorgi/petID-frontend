<template>
  <div class="card">

    <img :src="pet.image" alt="pet" />

    <div class="content">
      <h3>{{ pet.name }}</h3>
      <p><strong>Razza:</strong> {{ pet.breed }}</p>
      <p><strong>Note:</strong> {{ pet.notes }}</p>
      <p><strong>Tel:</strong> {{ pet.phone }}</p>
    </div>

  </div>
</template>

<script setup>
defineProps({
  pet: Object
})
</script>

<style scoped>

.card {
  width: 100%;
  background: white;
  border-radius: 16px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.content {
  padding: 12px;
}

h3 {
  margin: 0 0 6px;
  font-size: 18px;
  color: #111;
}

p {
  margin: 3px 0;
  font-size: 13px;
  color: #333;
}

</style>