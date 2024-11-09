<script setup>
import { ref, useTemplateRef } from 'vue'
import { getFirstCharacter } from '@/Helper/utils.js'
import { Link, usePage } from '@inertiajs/vue3'

const page = usePage()

const avatarLabel = getFirstCharacter(page.props.auth.user.name)

const profileMenu = useTemplateRef('profileMenu')

const items = ref([
    {
        label: 'Profile',
        items: [
            {
                label: 'Profile',
                icon: 'pi pi-user',
                href: route('profile.edit')
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out',
                href: route('logout'),
                method: 'post',
                as: 'button'
            }
        ]
    },
    {
        separator: true
    }
])

function toggleProfileMenu(event) {
    profileMenu.value.toggle(event)
}

defineExpose({
    toggleProfileMenu
})
</script>

<template>
    <Menu :model="items" class="w-full md:w-60" :popup="true" ref="profileMenu" id="overlay_menu">
        <template #submenulabel="{ item }">
            <span class="font-bold text-primary">{{ item.label }}</span>
        </template>
        <template #item="{ item, props }">
            <Link
                v-ripple
                class="flex items-center"
                v-bind="props.action"
                :href="item.href"
                :method="item.method"
                :as="item.as"
                aria-hidden="false"
            >
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
                <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            </Link>
        </template>
        <template #end>
            <button
                v-ripple
                class="relative flex w-full cursor-pointer items-center overflow-hidden rounded-none border-0 bg-transparent p-2 pl-4 transition-colors duration-200 hover:bg-surface-100 dark:hover:bg-surface-800"
            >
                <Avatar
                    :label="avatarLabel"
                    class="mr-2"
                    shape="circle"
                    :style="{
                        backgroundColor: 'var(--primary-color)',
                        color: 'var(--primary-contrast-color)'
                    }"
                />
                <span class="inline-flex flex-col items-start">
                    <span class="font-bold">
                        {{ $page.props.auth.user.name }}
                    </span>
                    <span class="text-sm">User Role</span>
                </span>
            </button>
        </template>
    </Menu>
</template>

<style scoped></style>
