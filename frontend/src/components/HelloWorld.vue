<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const data = ref(null);

const getData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/tag/all');
    data.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
</script>

<template>
<button @click="getData">Get Data</button>
  <div id="data">{{ data }}</div>
</template>