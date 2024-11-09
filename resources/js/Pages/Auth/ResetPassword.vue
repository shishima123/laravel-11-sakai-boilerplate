<script setup>
import InputError from '@/Components/InputError.vue'
import { Head, useForm } from '@inertiajs/vue3'
import InputLabel from '@/Components/InputLabel.vue'
import FloatingConfigurator from '@/Components/FloatingConfigurator.vue'
import ApplicationLogo from '@/Components/ApplicationLogo.vue'

const props = defineProps({
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
})

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: ''
})

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => form.reset('password', 'password_confirmation')
    })
}
</script>

<template>
    <Head title="Reset Password" />
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
                            New Password
                        </div>
                        <span class="font-medium text-muted-color"> Enter your new password </span>
                    </div>

                    <form @submit.prevent="submit">
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

                            <Button
                                type="submit"
                                label="Reset Password"
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
