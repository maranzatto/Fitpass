<template>
    <div class="layout">
        <SideComponent />

        <main>
            <HeaderComponent />
            <slot />
        </main>
    </div>
</template>

<script setup>
import SideComponent from '@/components/SideComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
    overflow: hidden;
}

main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-xl);
    background-color: var(--color-bg-secondary);
    gap: var(--spacing-lg);
}
</style>
