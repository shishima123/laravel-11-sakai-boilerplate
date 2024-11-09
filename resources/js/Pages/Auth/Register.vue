<script setup>
import InputError from '@/Components/InputError.vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import InputLabel from '@/Components/InputLabel.vue'
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import FloatingConfigurator from '@/Components/FloatingConfigurator.vue'

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation')
    })
}
</script>

<template>
    <Head title="Register" />
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
                        <span class="font-medium text-muted-color">Sign up to continue</span>
                    </div>

                    <form @submit.prevent="submit">
                        <div>
                            <InputLabel for="name" value="Name" />
                            <InputText
                                id="name"
                                type="text"
                                placeholder="Name"
                                class="w-full md:w-[30rem]"
                                v-model="form.name"
                                :invalid="form.errors.name?.length > 0"
                            />
                            <InputError class="mt-2" :message="form.errors.name" />

                            <InputLabel class="mt-3" for="email" value="Email" />
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

                            <InputLabel
                                class="mt-3"
                                for="password_confirmation"
                                value="Confirm Password"
                            />
                            <Password
                                id="password_confirmation"
                                v-model="form.password_confirmation"
                                placeholder="Confirm Password"
                                :toggleMask="true"
                                fluid
                                :feedback="false"
                                :invalid="form.errors.password_confirmation?.length > 0"
                            ></Password>
                            <InputError class="mt-2" :message="form.errors.password_confirmation" />

                            <Button type="submit" label="Sign Up" class="mb-4 mt-8 w-full"></Button>

                            <span class="font-medium text-surface-600 dark:text-surface-200">
                                Already have an account?
                                <Link
                                    :href="route('login')"
                                    class="cursor-pointer font-semibold text-surface-900 transition-colors duration-300 hover:text-primary dark:text-surface-0"
                                >
                                    Sign in
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
