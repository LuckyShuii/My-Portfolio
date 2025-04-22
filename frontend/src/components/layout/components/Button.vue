<script setup lang="ts">
const props = defineProps<{
    label: string;
    loading: boolean | undefined;
    disabled: boolean | undefined;
    isHomeData: boolean;
}>();

</script>

<template>
    <v-btn 
        :loading="loading" 
        :disabled="disabled"
        :class="isHomeData ? 'vbtn-home' : 'vbtn-other'"
    >
        {{ label }}
    </v-btn>
</template>

<style scoped>
.vbtn-home {
  background-color: #448BEF;
  font-weight: bold;
  color: white;
  border-radius: 15px;
  width: 220px;
  height: 65px !important;
  font-size: 20px;
}

.vbtn-other {
    background-color: #448BEF;
    font-weight: bold;
    color: white;
    border-radius: 15px;
}
</style>