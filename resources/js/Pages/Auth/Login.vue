<script setup>
import { Head, useForm, Link } from '@inertiajs/vue3'
import InputLabel from '@/Components/InputLabel.vue'
import FloatingConfigurator from '@/Components/FloatingConfigurator.vue'
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import InputError from '@/Components/InputError.vue'

defineProps({
    canResetPassword: {
        type: Boolean
    },
    status: {
        type: String
    }
})

const form = useForm({
    email: '',
    password: '',
    remember: false
})

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password')
    })
}
</script>

<template>
    <Head title="Login" />
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
                            Welcome to PrimeLand!
                        </div>
                        <span class="font-medium text-muted-color"> Sign in to continue </span>
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

                            <InputLabel class="mt-3" for="password" value="Password" />
                            <Password
                                id="password"
                                v-model="form.password"
                                placeholder="Password"
                                :toggleMask="true"
                                fluid
                                :feedback="false"
                                :invalid="form.errors.password?.length > 0"
                            ></Password>
                            <InputError class="mt-2" :message="form.errors.password" />

                            <div class="mb-8 mt-3 flex items-center justify-between gap-8">
                                <div class="flex items-center">
                                    <Checkbox
                                        v-model="form.remember"
                                        id="remember"
                                        binary
                                        class="mr-2"
                                    ></Checkbox>
                                    <label for="remember">Remember me</label>
                                </div>

                                <Link
                                    v-if="canResetPassword"
                                    :href="route('password.request')"
                                    class="ml-2 cursor-pointer text-right font-medium text-primary no-underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Button
                                type="submit"
                                label="Sign In"
                                class="mb-3 w-full"
                                :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing"
                            ></Button>

                            <span class="font-medium text-surface-600 dark:text-surface-200">
                                Don't have account?
                                <Link
                                    :href="route('register')"
                                    class="cursor-pointer font-semibold text-surface-900 transition-colors duration-300 hover:text-primary dark:text-surface-0"
                                >
                                    Sign up
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
