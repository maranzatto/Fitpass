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
    width: 220px;
    height: 100vh;
    display: flex;
    flex-direction: column;
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
    list-style: none;
    padding: 0;
}

.menu li,
.bottom-menu li {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: var(--spacing-sm);
    margin: var(--spacing-md) 0;
    font-size: var(--font-size-base);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-md);
    transition: all var(--transition-base);
    position: relative;
}

.menu-link {
    display: flex;
    align-items: center;
    flex: 1;
    gap: var(--spacing-sm);
    color: inherit;
    text-decoration: none;
}

.menu-link.router-link-active {
    color: var(--color-white);
    font-weight: 500;
}

.menu-link.router-link-active::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    background: var(--color-white);
    border-radius: 0 4px 4px 0;
}

.menu li:hover,
.bottom-menu li:hover {
    background: var(--color-sidebar-hover);
    transform: translateX(2px);
}

.menu li:hover .menu-link.router-link-active,
.bottom-menu li:hover .menu-link.router-link-active {
    color: var(--color-white);
}

.menu li i,
.bottom-menu li i {
    opacity: 0.85;
    transition: opacity var(--transition-base);
}

.menu li:hover i,
.bottom-menu li:hover i {
    opacity: 1;
}

.bottom-menu {
    margin-top: auto;
}
</style>
