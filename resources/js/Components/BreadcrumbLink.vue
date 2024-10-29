<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    home: Object,
    items: Array,
});
</script>

<template>
    <Breadcrumb :model="items">
        <template #item="{ item, props }">
            <Link v-if="item.route" :href="item.route" v-bind="props.action">
                <span
                    v-if="item.label"
                    class="group font-semibold dark:text-surface-0"
                    :class="{ 'hover:text-primary': item.route }"
                >
                    <span
                        v-if="item.icon"
                        :class="[
                            item.icon,
                            { 'group-hover:text-primary': item.route },
                        ]"
                        class="mr-0.5 group-hover:text-primary dark:text-surface-0"
                    />
                    {{ item.label }}
                </span>
            </Link>
            <a
                v-else
                :href="item.url"
                :target="item.target"
                v-bind="props.action"
            >
                <span
                    class="group text-surface-700 dark:text-surface-0"
                    :class="{ 'hover:text-primary': item.url }"
                >
                    <span
                        v-if="item.icon"
                        :class="[
                            item.icon,
                            { 'group-hover:text-primary': item.url },
                        ]"
                        class="mr-0.5 dark:text-surface-0"
                    />
                    {{ item.label }}
                </span>
            </a>
        </template>
    </Breadcrumb>
</template>
