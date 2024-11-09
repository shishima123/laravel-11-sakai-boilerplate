<script setup>
import { computed } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import FloatingConfigurator from '@/Components/FloatingConfigurator.vue'

const props = defineProps({
    status: {
        type: String
    }
})

const form = useForm({})

const submit = () => {
    form.post(route('verification.send'))
}

const verificationLinkSent = computed(() => props.status === 'verification-link-sent')
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
                    <div class="mb-4 text-center">
                        <ApplicationLogo />
                        <div class="mb-4 text-3xl font-medium text-surface-900 dark:text-surface-0">
                            Email Verification
                        </div>
                        <span class="font-medium text-muted-color">
                            Thanks for signing up!
                            <br />
                            Before getting started, could you verify your email address <br />by
                            clicking on the link we just emailed to you?
                            <br />
                            If you didn't receive the email, we will gladly send you another.
                        </span>
                    </div>

                    <Message severity="success" class="mb-4" v-if="verificationLinkSent">
                        A new verification link has been sent to the email address you provided
                        during registration.
                    </Message>

                    <form @submit.prevent="submit">
                        <div class="mt-6 flex items-center justify-between">
                            <Button
                                type="submit"
                                label="Sign In"
                                :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing"
                            >
                                Resend Verification Email
                            </Button>

                            <Link
                                :href="route('logout')"
                                method="post"
                                as="button"
                                class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Log Out
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
