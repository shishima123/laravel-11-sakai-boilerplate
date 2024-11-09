<script setup>
import InputError from '@/Components/InputError.vue'
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import InputLabel from '@/Components/InputLabel.vue'

const confirmingUserDeletionDialog = ref(false)
const passwordInput = ref(null)

const form = useForm({
    password: ''
})

const deleteUser = () => {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.$el.focus(),
        onFinish: () => form.reset()
    })
}

const closeModal = () => {
    confirmingUserDeletionDialog.value = false

    form.clearErrors()
    form.reset()
}
</script>

<template>
    <section class="space-y-6">
        <header>
            <h2 class="text-lg font-medium">Delete Account</h2>

            <p class="mt-1">
                Once your account is deleted, all of its resources and data will be permanently
                deleted. Before deleting your account, please download any data or information that
                you wish to retain.
            </p>
        </header>

        <Button
            label="Delete Account"
            severity="danger"
            @click="confirmingUserDeletionDialog = true"
        />

        <Dialog
            v-model:visible="confirmingUserDeletionDialog"
            modal
            header="Are you sure you want to delete your account?"
            :style="{ width: '40rem' }"
            @hide="closeModal"
        >
            <span class="mb-8 block text-surface-500 dark:text-surface-400">
                Once your account is deleted, all of its resources and data will be permanently
                deleted. Please enter your password to confirm you would like to permanently delete
                your account.
            </span>
            <div class="mt-6">
                <InputLabel for="password" value="Password" class="sr-only" />
                <InputText
                    id="password"
                    type="password"
                    ref="passwordInput"
                    placeholder="Password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    :invalid="form.errors.password?.length > 0"
                    @keyup.enter="deleteUser"
                    autofocus
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-6 flex justify-end gap-2">
                <Button
                    label="Cancel"
                    severity="secondary"
                    @click="confirmingUserDeletionDialog = false"
                ></Button>
                <Button
                    label="Delete Account"
                    severity="danger"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="deleteUser"
                ></Button>
            </div>
        </Dialog>
    </section>
</template>
