<script setup>
import { ref } from 'vue';

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        class="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        v-model="model"
        ref="input"
    />
</template>
