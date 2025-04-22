<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import Button from './layout/components/Button.vue';

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
<h1>{{ $t("home.header") }}</h1>
<button @click="getData">Get Data</button>
<div id="data">{{ data }}</div>
<Button label="Button !" @click="getData" :loading="false" :disabled="false" :is-home-data="true" />
</template>