<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'

defineProps({
    home: {
        type: Object,
        default: {
            icon: 'pi pi-home'
        }
    },
    items: Array
})

const customBreadcrumb = ref({
    root: {
        padding: 0,
        background: 'transparent'
    }
})
</script>

<template>
    <Breadcrumb :home="home" :model="items" :dt="customBreadcrumb">
        <template #item="{ item, props }">
            <Link v-if="item.url" :href="item.url" v-bind="props.action">
                <span
                    v-if="item.icon"
                    class="p-breadcrumb-item-icon"
                    :class="[item.icon]"
                    data-pc-section="itemicon"
                />

                <span v-if="item.label" class="p-breadcrumb-item-label" data-pc-section="itemlabel">
                    {{ item.label }}
                </span>
            </Link>
            <a
                v-else
                v-bind="props.action"
                class="p-breadcrumb-item-link"
                data-pc-section="itemlink"
            >
                <span
                    v-if="item.icon"
                    class="p-breadcrumb-item-icon"
                    :class="[item.icon]"
                    data-pc-section="itemicon"
                >
                </span>
                <span v-if="item.label" class="p-breadcrumb-item-label" data-pc-section="itemlabel">
                    {{ item.label }}
                </span>
            </a>
        </template>
    </Breadcrumb>
</template>
