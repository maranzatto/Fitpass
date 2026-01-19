<template>
    <aside class="sidebar">
        <h2 class="logo"><i class="fa-solid fa-leaf"></i> Little</h2>

        <ul class="menu">
            <li>
                <router-link to="/" class="menu-link">
                    <i class="fa-solid fa-house"></i> Página Inicial
                </router-link>
            </li>
            <li>
                <router-link to="/clients" class="menu-link">
                    <i class="fa-solid fa-users"></i> Clientes
                </router-link>
            </li>
        </ul>

        <ul class="bottom-menu">
            <li><i class="fa-solid fa-gear"></i> Configurações</li>
            <li><i class="fa-solid fa-right-from-bracket"></i> Sair</li>
        </ul>
    </aside>
</template>

<script setup></script>

<style scoped>
.sidebar {
    @apply w-[220px] h-screen flex flex-col;
    background: var(--color-primary);
    color: var(--color-white);
    padding: var(--spacing-lg);
    border-top-right-radius: var(--border-radius-3xl);
    border-bottom-right-radius: var(--border-radius-3xl);
    box-shadow: var(--shadow-md);
}

.logo {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-xl);
    font-weight: 600;
}

.menu,
.bottom-menu {
    @apply list-none;
    padding: 0;
}

.menu li,
.bottom-menu li {
    @apply flex items-center cursor-pointer;
    gap: var(--spacing-sm);
    margin: var(--spacing-md) 0;
    font-size: var(--font-size-base);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-md);
    transition: background var(--transition-base);
}

.menu-link {
    @apply flex items-center flex-1;
    gap: var(--spacing-sm);
    color: inherit;
    text-decoration: none;
}

.menu-link.router-link-active {
    color: var(--color-white);
    background: var(--color-active);
}

.menu li:hover,
.bottom-menu li:hover {
    background: var(--color-hover);
}

.menu li i,
.bottom-menu li i {
    @apply opacity-85;
}

.bottom-menu {
    @apply mt-auto;
}
</style>
