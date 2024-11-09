<script setup>
import InputError from '@/Components/InputError.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import InputLabel from '@/Components/InputLabel.vue'
import FloatingConfigurator from '@/Components/FloatingConfigurator.vue'
import ApplicationLogo from '@/Components/ApplicationLogo.vue'

defineProps({
    status: {
        type: String
    }
})

const form = useForm({
    email: ''
})

const submit = () => {
    form.post(route('password.email'))
}
</script>

<template>
    <Head title="Forgot Password" />
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
                            Forgot Password
                        </div>
                        <span class="inline-block font-medium text-muted-color">
                            Enter your email to reset your password
                        </span>
                    </div>

                    <form @submit.prevent="submit">
                        <Message severity="success" class="mb-4" v-if="status">
                            {{ status }}
                        </Message>
                        <div>
                            <InputLabel for="email" value="Email" />
                            <InputText
                                id="email"
                                type="text"
                                placeholder="Email"
                                class="w-full md:w-[30rem]"
                                v-model="form.email"
                                :invalid="form.errors.email?.length > 0"
                            />
                            <InputError class="mt-2" :message="form.errors.email" />

                            <div class="mt-8 flex items-center justify-between">
                                <Link class="w-[45%]" :href="route('login')">
                                    <Button
                                        severity="secondary"
                                        outlined
                                        type="button"
                                        label="Cancel"
                                        class="w-full"
                                        :class="{
                                            'opacity-25': form.processing
                                        }"
                                        :disabled="form.processing"
                                    ></Button>
                                </Link>

                                <Button
                                    type="submit"
                                    label="Sign In"
                                    class="w-[45%]"
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                ></Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
