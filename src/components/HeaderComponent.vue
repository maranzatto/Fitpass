<template>
    <header class="topbar">
        <button class="filter-btn">Filtros</button>
        <div class="user">
            <span class="name">LLLLL</span><br />
            <span class="email">LLLL@gmail.com</span>
        </div>
    </header>
</template>

<script setup></script>

<style scoped>
.topbar {
    @apply flex justify-between items-center;
    background: var(--color-bg-primary);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-sm);
}

.filter-btn {
    @apply cursor-pointer;
    background: var(--color-primary-100);
    border: 1px solid var(--color-border);
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--border-radius-lg);
    font-size: var(--font-size-sm);
    transition: background var(--transition-base);
}

.filter-btn:hover {
    background: var(--color-primary-200);
}

.user {
    @apply text-right;
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
}
</style>
