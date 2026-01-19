<template>
    <div class="dashboard">
        <div class="header">
            <h1 class="title">Dashboard</h1>
            <p class="subtitle">Bem-vindo ao sistema</p>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fa-solid fa-users"></i>
                </div>
                <div class="stat-content">
                    <h3 class="stat-number">1,234</h3>
                    <p class="stat-label">Clientes</p>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fa-solid fa-chart-line"></i>
                </div>
                <div class="stat-content">
                    <h3 class="stat-number">89.3%</h3>
                    <p class="stat-label">Crescimento</p>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fa-solid fa-calendar"></i>
                </div>
                <div class="stat-content">
                    <h3 class="stat-number">456</h3>
                    <p class="stat-label">Eventos</p>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-icon">
                    <i class="fa-solid fa-dollar-sign"></i>
                </div>
                <div class="stat-content">
                    <h3 class="stat-number">R$ 12.345</h3>
                    <p class="stat-label">Receita</p>
                </div>
            </div>
        </div>

        <div class="content-grid">
            <div class="chart-card">
                <h2 class="card-title">Visão Geral</h2>
                <div class="chart-placeholder">
                    <i class="fa-solid fa-chart-area fa-3x"></i>
                    <p>Gráfico de desempenho</p>
                </div>
            </div>

            <div class="recent-activity">
                <h2 class="card-title">Atividade Recente</h2>
                <div class="activity-list">
                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fa-solid fa-user-plus"></i>
                        </div>
                        <div class="activity-content">
                            <p class="activity-text">Novo cliente cadastrado</p>
                            <span class="activity-time">Há 2 minutos</span>
                        </div>
                    </div>

                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fa-solid fa-edit"></i>
                        </div>
                        <div class="activity-content">
                            <p class="activity-text">Relatório atualizado</p>
                            <span class="activity-time">Há 15 minutos</span>
                        </div>
                    </div>

                    <div class="activity-item">
                        <div class="activity-icon">
                            <i class="fa-solid fa-bell"></i>
                        </div>
                        <div class="activity-content">
                            <p class="activity-text">Novo evento criado</p>
                            <span class="activity-time">Há 1 hora</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.title {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--color-text-primary);
}

.subtitle {
    font-size: var(--font-size-base);
    color: var(--color-text-secondary);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .stats-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

.stat-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border-radius: 0.75rem;
    background: var(--color-bg-primary);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--color-border);
}

.stat-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: var(--color-primary-100);
    color: var(--color-primary);
}

.stat-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.stat-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-primary);
}

.stat-label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
}

.content-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
}

@media (min-width: 1024px) {
    .content-grid {
        grid-template-columns: 2fr 1fr;
    }
}

.chart-card {
    padding: 1.5rem;
    border-radius: 0.75rem;
    background: var(--color-bg-primary);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
    .chart-card {
        grid-column: span 2;
    }
}

.recent-activity {
    padding: 1.5rem;
    border-radius: 0.75rem;
    background: var(--color-bg-primary);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--color-border);
}

.card-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--color-text-primary);
}

.chart-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 16rem;
    gap: 1rem;
    color: var(--color-text-muted);
}

.activity-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.activity-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
}

.activity-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-top: 0.25rem;
    background: var(--color-primary-50);
    color: var(--color-primary);
}

.activity-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.activity-text {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-primary);
}

.activity-time {
    font-size: 0.75rem;
    color: var(--color-text-muted);
}
</style>
