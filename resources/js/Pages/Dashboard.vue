<script setup>
import { Head } from '@inertiajs/vue3'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { ref } from 'vue'
import BreadcrumbLink from '@/Components/BreadcrumbLink.vue'

const props = defineProps({
    users: Number,
    roles: Number,
    permissions: Number
})

const breadCrumbItems = ref([{ label: 'Dashboard', url: route('dashboard') }])

// TODO: write document
const homeBreadCrumb = ref({ icon: 'pi pi-home' })

// const breadCrumbItems = ref([
//     { icon: 'pi pi-home', label: 'Home', url: route('profile.edit') },
//     { icon: 'pi pi-home', label: 'Components', url: 'https://google.com' },
//     { icon: 'pi pi-home', label: 'Form', url: route('profile.edit') },
//     { icon: 'pi pi-home', label: 'InputText', disabled: true },
// ]);
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #breadcrumb>
            <BreadcrumbLink :home="homeBreadCrumb" :items="breadCrumbItems" />
        </template>

        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-12 lg:col-span-6 xl:col-span-4">
                <div class="card mb-0">
                    <div class="mb-4 flex justify-between">
                        <div>
                            <span class="mb-4 block font-medium text-muted-color"> User </span>
                            <div class="text-xl font-medium text-surface-900 dark:text-surface-0">
                                {{ props.users }}
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-center bg-blue-100 rounded-border dark:bg-blue-400/10"
                            style="width: 2.5rem; height: 2.5rem"
                        >
                            <i class="pi pi-users !text-xl text-blue-500"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-6 xl:col-span-4">
                <div class="card mb-0">
                    <div class="mb-4 flex justify-between">
                        <div>
                            <span class="mb-4 block font-medium text-muted-color"> Role </span>
                            <div class="text-xl font-medium text-surface-900 dark:text-surface-0">
                                {{ props.roles }}
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-center bg-orange-100 rounded-border dark:bg-orange-400/10"
                            style="width: 2.5rem; height: 2.5rem"
                        >
                            <i class="pi pi-unlock !text-xl text-orange-500"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-6 xl:col-span-4">
                <div class="card mb-0">
                    <div class="mb-4 flex justify-between">
                        <div>
                            <span class="mb-4 block font-medium text-muted-color">
                                Permission
                            </span>
                            <div class="text-xl font-medium text-surface-900 dark:text-surface-0">
                                {{ props.permissions }}
                            </div>
                        </div>
                        <div
                            class="flex items-center justify-center bg-cyan-100 rounded-border dark:bg-cyan-400/10"
                            style="width: 2.5rem; height: 2.5rem"
                        >
                            <i class="pi pi-key !text-xl text-cyan-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped lang="scss"></style>
