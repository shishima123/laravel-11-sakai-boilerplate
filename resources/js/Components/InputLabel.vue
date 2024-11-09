<script setup>
defineProps({
    value: {
        type: String
    }
})
</script>

<template>
    <label class="mb-2 block text-xl font-medium text-surface-900 dark:text-surface-0">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
