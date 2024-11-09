<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import DeleteUserForm from './Partials/DeleteUserForm.vue'
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue'
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue'
import { Head } from '@inertiajs/vue3'
import BreadcrumbLink from '@/Components/BreadcrumbLink.vue'
import { ref } from 'vue'

defineProps({
    mustVerifyEmail: {
        type: Boolean
    },
    status: {
        type: String
    }
})

const breadCrumbItems = ref([{ label: 'Profile', url: route('profile.edit') }])
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <template #breadcrumb>
            <BreadcrumbLink :items="breadCrumbItems" />
        </template>

        <div class="mx-auto space-y-6">
            <div class="card">
                <UpdateProfileInformationForm
                    :must-verify-email="mustVerifyEmail"
                    :status="status"
                    class="max-w-xl"
                />
            </div>

            <div class="card">
                <UpdatePasswordForm class="max-w-xl" />
            </div>

            <div class="card">
                <DeleteUserForm class="max-w-xl" />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
