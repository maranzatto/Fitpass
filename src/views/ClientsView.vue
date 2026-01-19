<template>
    <div class="clients">
        <div class="header">
            <h1 class="title">Clientes</h1>
            <div class="header-actions">
                <router-link to="/clients/create" class="btn btn-primary">
                    <i class="fa-solid fa-plus"></i>
                    Novo Cliente
                </router-link>
            </div>
        </div>

        <div class="filters">
            <div class="search-box">
                <i class="fa-solid fa-search"></i>
                <input type="text" placeholder="Buscar clientes..." />
            </div>
            <select class="filter-select">
                <option>Todos os status</option>
                <option>Ativo</option>
                <option>Inativo</option>
                <option>Pendente</option>
            </select>
        </div>

        <div class="table-container">
            <table class="clients-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Status</th>
                        <th>Data de Cadastro</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in clients" :key="client.id">
                        <td class="client-name">
                            <div class="client-avatar">
                                <img :src="client.avatar" :alt="client.name" />
                            </div>
                            {{ client.name }}
                        </td>
                        <td>{{ client.email }}</td>
                        <td>{{ client.phone }}</td>
                        <td>
                            <span class="status-badge" :class="client.status">
                                {{ getStatusText(client.status) }}
                            </span>
                        </td>
                        <td>{{ client.createdAt }}</td>
                        <td>
                            <div class="action-buttons">
                                <button class="btn-icon" title="Editar">
                                    <i class="fa-solid fa-edit"></i>
                                </button>
                                <button class="btn-icon" title="Visualizar">
                                    <i class="fa-solid fa-eye"></i>
                                </button>
                                <button class="btn-icon" title="Excluir">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="pagination">
            <button class="pagination-btn" disabled>
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <span class="pagination-info">Página 1 de 10</span>
            <button class="pagination-btn">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Client {
    id: number
    name: string
    email: string
    phone: string
    status: 'active' | 'inactive' | 'pending'
    avatar: string
    createdAt: string
}

const clients = ref<Client[]>([
    {
        id: 1,
        name: 'João Silva',
        email: 'joao.silva@email.com',
        phone: '(11) 98765-4321',
        status: 'active',
        avatar: 'https://picsum.photos/seed/joao/40/40.jpg',
        createdAt: '15/01/2024'
    },
    {
        id: 2,
        name: 'Maria Santos',
        email: 'maria.santos@email.com',
        phone: '(11) 91234-5678',
        status: 'active',
        avatar: 'https://picsum.photos/seed/maria/40/40.jpg',
        createdAt: '14/01/2024'
    },
    {
        id: 3,
        name: 'Pedro Oliveira',
        email: 'pedro.oliveira@email.com',
        phone: '(11) 99876-5432',
        status: 'inactive',
        avatar: 'https://picsum.photos/seed/pedro/40/40.jpg',
        createdAt: '13/01/2024'
    },
    {
        id: 4,
        name: 'Ana Costa',
        email: 'ana.costa@email.com',
        phone: '(11) 97654-3210',
        status: 'pending',
        avatar: 'https://picsum.photos/seed/ana/40/40.jpg',
        createdAt: '12/01/2024'
    },
    {
        id: 5,
        name: 'Carlos Ferreira',
        email: 'carlos.ferreira@email.com',
        phone: '(11) 96543-2109',
        status: 'active',
        avatar: 'https://picsum.photos/seed/carlos/40/40.jpg',
        createdAt: '11/01/2024'
    }
])

const getStatusText = (status: string) => {
    const statusMap = {
        active: 'Ativo',
        inactive: 'Inativo',
        pending: 'Pendente'
    }
    return statusMap[status as keyof typeof statusMap] || status
}
</script>

<style scoped>
.clients {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--color-text-primary);
}

.header-actions {
    display: flex;
    gap: 0.75rem;
}

.btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: background-color var(--transition-base);
}

.btn-primary {
    background: var(--color-primary);
    color: var(--color-white);
}

.btn-primary:hover {
    background: var(--color-primary-dark);
}

.filters {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media (min-width: 640px) {
    .filters {
        flex-direction: row;
    }
}

.search-box {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid;
    background: var(--color-bg-primary);
    border-color: var(--color-border);
    color: var(--color-text-primary);
    box-shadow: var(--shadow-sm);
}

.search-box input {
    flex: 1;
    background: transparent;
    outline: none;
    color: var(--color-text-primary);
}

.search-box input::placeholder {
    color: var(--color-text-muted);
}

.filter-select {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid;
    background: var(--color-bg-primary);
    border-color: var(--color-border);
    color: var(--color-text-primary);
    box-shadow: var(--shadow-sm);
}

.table-container {
    overflow-x: auto;
    border-radius: 0.75rem;
    background: var(--color-bg-primary);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--color-border);
}

.clients-table {
    width: 100%;
}

.clients-table thead {
    background: var(--color-bg-tertiary);
}

.clients-table th {
    padding: 1rem 1.5rem;
    text-align: left;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
}

.clients-table td {
    padding: 1rem 1.5rem;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
}

.client-name {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--color-text-primary);
    font-weight: 500;
}

.client-avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
}

.client-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.status-badge {
    display: inline-flex;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
}

.status-badge.active {
    background: var(--color-success);
    color: var(--color-white);
}

.status-badge.inactive {
    background: var(--color-error);
    color: var(--color-white);
}

.status-badge.pending {
    background: var(--color-warning);
    color: var(--color-white);
}

.action-buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.btn-icon {
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color var(--transition-base);
    color: var(--color-text-muted);
}

.btn-icon:hover {
    background: var(--color-hover);
    color: var(--color-text-primary);
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.pagination-btn {
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color var(--transition-base);
    color: var(--color-text-muted);
}

.pagination-btn:hover:not(:disabled) {
    background: var(--color-hover);
    color: var(--color-text-primary);
}

.pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination-info {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
}
</style>
