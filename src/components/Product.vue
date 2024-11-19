<template>
    <div class="block__item">{{ nameProduct }}</div>
  </template>
  
  <script setup>
  import { computed, defineProps } from "vue";
  
  const props = defineProps({
    name: String,
  });
  
  const nameProduct = computed(() => props.name);
  </script>