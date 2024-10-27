<template>
    <div class="card">
        <div class="mb-4 text-2xl font-semibold">Documentation</div>
        <div class="mb-4 text-xl font-semibold">Get Started</div>
        <p class="mb-4 text-lg">
            Sakai is an application template for Vue based on the
            <a
                href="https://github.com/vuejs/create-vue"
                class="font-medium text-primary hover:underline"
                >create-vue</a
            >, the recommended way to start a <strong>Vite-powered</strong> Vue
            projects. To get started, clone the
            <a
                href="https://github.com/primefaces/sakai-vue"
                class="font-medium text-primary hover:underline"
                >repository</a
            >
            from GitHub and install the dependencies with npm or yarn.
        </p>
        <pre class="app-code">
<code>git clone https://github.com/primefaces/sakai-vue
npm install
npm run dev</code></pre>

        <p class="mb-4 text-lg">
            Navigate to
            <i
                class="px-2 py-1 text-base not-italic bg-highlight rounded-border"
                >http://localhost:5173/</i
            >
            to view the application in your local environment.
        </p>

        <pre class="app-code"><code>npm run dev</code></pre>

        <div class="mb-4 text-xl font-semibold">Structure</div>
        <p class="mb-4 text-lg">
            Templates consists of a couple folders, demos and layout have been
            separated so that you can easily remove what is not necessary for
            your application.
        </p>
        <ul class="mb-4 list-disc pl-8 text-lg leading-normal">
            <li>
                <span class="font-medium text-primary">src/layout</span>: Main
                layout files, needs to be present.
            </li>
            <li>
                <span class="font-medium text-primary">src/views</span>: Demo
                pages like Dashboard.
            </li>
            <li>
                <span class="font-medium text-primary">public/demo</span>:
                Assets used in demos
            </li>
            <li>
                <span class="font-medium text-primary">src/assets/demo</span>:
                Styles used in demos
            </li>
            <li>
                <span class="font-medium text-primary">src/assets/layout</span>:
                SCSS files of the main layout
            </li>
        </ul>

        <div class="mb-4 text-xl font-semibold">Menu</div>
        <p class="mb-4 text-lg">
            Main menu is defined at
            <span
                class="px-2 py-1 text-base not-italic bg-highlight rounded-border"
                >src/layout/AppMenu.vue</span
            >
            file. Update the
            <i
                class="px-2 py-1 text-base not-italic bg-highlight rounded-border"
                >model</i
            >
            property to define your own menu items.
        </p>

        <div class="mb-4 text-xl font-semibold">Layout Composable</div>
        <p class="mb-4 text-lg">
            The
            <span
                class="px-2 py-1 text-base not-italic bg-highlight rounded-border"
                >src/layout/composables/layout.js</span
            >
            is a composable that manages the layout state changes including dark
            mode, PrimeVue theme, menu modes and states. If you change the
            initial values like the preset or colors, make sure to apply them at
            PrimeVue config at main.js as well.
        </p>

        <div class="mb-4 text-xl font-semibold">Tailwind CSS</div>
        <p class="mb-4 text-lg">
            The demo pages are developed with Tailwind CSS however the core
            application shell mainly uses custom CSS.
        </p>

        <div class="mb-4 text-xl font-semibold">Variables</div>
        <p class="mb-4 text-lg">
            CSS variables used in the template derive their values from the
            PrimeVue styled mode presets, use the files under
            <span
                class="px-2 py-1 text-base not-italic bg-highlight rounded-border"
                >assets/layout/_variables.scss</span
            >
            to customize according to your requirements.
        </p>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 991px) {
    .video-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
