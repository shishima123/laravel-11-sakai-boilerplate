<script setup>
import InputError from '@/Components/InputError.vue'
import { Head, useForm } from '@inertiajs/vue3'
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import FloatingConfigurator from '@/Components/FloatingConfigurator.vue'
import InputLabel from '@/Components/InputLabel.vue'

const form = useForm({
    password: ''
})

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset()
    })
}
</script>

<template>
    <Head title="Confirm Password" />
    <FloatingConfigurator />
    <div
        class="flex min-h-screen min-w-[100vw] items-center justify-center overflow-hidden bg-surface-50 dark:bg-surface-950"
    >
        <div class="flex flex-col items-center justify-center">
            <div
                style="
                    border-radius: 56px;
                    padding: 0.3rem;
                    background: linear-gradient(
                        180deg,
                        var(--primary-color) 10%,
                        rgba(33, 150, 243, 0) 30%
                    );
                "
            >
                <div
                    class="w-full bg-surface-0 px-8 py-20 sm:px-20 dark:bg-surface-900"
                    style="border-radius: 53px"
                >
                    <div class="mb-8 text-center">
                        <ApplicationLogo />
                        <div class="mb-4 text-3xl font-medium text-surface-900 dark:text-surface-0">
                            Confirm Password
                        </div>
                        <span class="font-medium text-muted-color">
                            This is a secure area of the application.
                            <br />
                            Please confirm your password before continuing.
                        </span>
                    </div>

                    <form @submit.prevent="submit">
                        <div>
                            <InputLabel for="password" value="Password" />
                            <Password
                                id="password"
                                v-model="form.password"
                                placeholder="Password"
                                :toggleMask="true"
                                fluid
                                :feedback="false"
                                :invalid="form.errors.password?.length > 0"
                                autocomplete="current-password"
                                autofocus
                            ></Password>
                            <InputError class="mt-2" :message="form.errors.password" />
                            <Button
                                type="submit"
                                label="Confirm"
                                class="mt-8 w-full"
                                :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing"
                            ></Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
