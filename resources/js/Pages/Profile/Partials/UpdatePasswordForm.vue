<script setup>
import InputError from '@/Components/InputError.vue'
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import InputLabel from '@/Components/InputLabel.vue'

import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
const confirm = useConfirm()
const toast = useToast()

const passwordInput = ref(null)
const currentPasswordInput = ref(null)

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: ''
})

const saveConfirm = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        rejectProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Save'
        },
        accept: () => {
            updatePassword()
        }
    })
}

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => {
            toast.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Save Successfully!',
                life: 3000
            })
            form.reset()
        },
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation')
                passwordInput.value.$el.focus()
            }
            if (form.errors.current_password) {
                form.reset('current_password')
                currentPasswordInput.value.$el.focus()
            }
        }
    })
}
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Update Password</h2>

            <p class="mt-1 text-sm text-gray-600">
                Ensure your account is using a long, random password to stay secure.
            </p>
        </header>

        <form class="mt-6 space-y-6">
            <div>
                <InputLabel
                    for="current_password"
                    value="Current Password"
                    class="!mb-0 !text-sm !text-gray-700"
                />

                <InputText
                    id="current_password"
                    ref="currentPasswordInput"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.current_password"
                    :invalid="form.errors.current_password?.length > 0"
                    autocomplete="current-password"
                />

                <InputError :message="form.errors.current_password" class="mt-2" />
            </div>

            <div>
                <InputLabel
                    for="password"
                    value="New Password"
                    class="!mb-0 !text-sm !text-gray-700"
                />

                <InputText
                    id="password"
                    ref="passwordInput"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    :invalid="form.errors.password?.length > 0"
                    autocomplete="new-password"
                />

                <InputError :message="form.errors.password" class="mt-2" />
            </div>

            <div>
                <InputLabel
                    for="password_confirmation"
                    value="Confirm Password"
                    class="!mb-0 !text-sm !text-gray-700"
                />

                <InputText
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    :invalid="form.errors.password_confirmation?.length > 0"
                    autocomplete="new-password"
                />

                <InputError :message="form.errors.password_confirmation" class="mt-2" />
            </div>

            <div class="flex items-center gap-4">
                <Button label="Save" :disabled="form.processing" @click="saveConfirm()" />
            </div>
        </form>
    </section>
</template>
