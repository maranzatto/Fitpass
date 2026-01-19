<template>
    <div class="client-form">
        <div class="header">
            <h1 class="title">Cadastrar Cliente</h1>
            <div class="header-actions">
                <button class="btn btn-secondary" @click="$router.push('/clients')">
                    <i class="fa-solid fa-arrow-left"></i>
                    Voltar
                </button>
            </div>
        </div>

        <div class="form-container">
            <form @submit.prevent="handleSubmit" class="form">
                <div class="form-section">
                    <h2 class="section-title">Dados Pessoais</h2>

                    <div class="form-grid">
                        <div class="form-group">
                            <label for="name">Nome Completo *</label>
                            <input type="text" id="name" v-model="form.name" required
                                placeholder="Digite o nome completo" />
                        </div>

                        <div class="form-group">
                            <label for="email">E-mail *</label>
                            <input type="email" id="email" v-model="form.email" required
                                placeholder="Digite o e-mail" />
                        </div>

                        <div class="form-group">
                            <label for="phone">Telefone *</label>
                            <input type="tel" id="phone" v-model="form.phone" required placeholder="(00) 00000-0000" />
                        </div>

                        <div class="form-group">
                            <label for="cpf">CPF *</label>
                            <input type="text" id="cpf" v-model="form.cpf" required placeholder="000.000.000-00" />
                        </div>

                        <div class="form-group">
                            <label for="birthDate">Data de Nascimento</label>
                            <input type="date" id="birthDate" v-model="form.birthDate" />
                        </div>

                        <div class="form-group">
                            <label for="gender">Gênero</label>
                            <select id="gender" v-model="form.gender">
                                <option value="">Selecione</option>
                                <option value="male">Masculino</option>
                                <option value="female">Feminino</option>
                                <option value="other">Outro</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <h2 class="section-title">Endereço</h2>

                    <div class="form-grid">
                        <div class="form-group">
                            <label for="cep">CEP</label>
                            <input type="text" id="cep" v-model="form.cep" placeholder="00000-000" @blur="searchCep" />
                        </div>

                        <div class="form-group">
                            <label for="street">Rua *</label>
                            <input type="text" id="street" v-model="form.street" required
                                placeholder="Digite o nome da rua" />
                        </div>

                        <div class="form-group">
                            <label for="number">Número *</label>
                            <input type="text" id="number" v-model="form.number" required
                                placeholder="Digite o número" />
                        </div>

                        <div class="form-group">
                            <label for="complement">Complemento</label>
                            <input type="text" id="complement" v-model="form.complement"
                                placeholder="Apto, casa, etc." />
                        </div>

                        <div class="form-group">
                            <label for="neighborhood">Bairro *</label>
                            <input type="text" id="neighborhood" v-model="form.neighborhood" required
                                placeholder="Digite o bairro" />
                        </div>

                        <div class="form-group">
                            <label for="city">Cidade *</label>
                            <input type="text" id="city" v-model="form.city" required placeholder="Digite a cidade" />
                        </div>

                        <div class="form-group">
                            <label for="state">Estado *</label>
                            <select id="state" v-model="form.state" required>
                                <option value="">Selecione</option>
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-section">
                    <h2 class="section-title">Informações Adicionais</h2>

                    <div class="form-grid">
                        <div class="form-group full-width">
                            <label for="observations">Observações</label>
                            <textarea id="observations" v-model="form.observations" rows="4"
                                placeholder="Observações adicionais sobre o cliente"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="status">Status *</label>
                            <select id="status" v-model="form.status" required>
                                <option value="active">Ativo</option>
                                <option value="inactive">Inativo</option>
                                <option value="pending">Pendente</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" @click="$router.push('/clients')">
                        Cancelar
                    </button>
                    <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                        <i class="fa-solid fa-save"></i>
                        {{ isSubmitting ? 'Salvando...' : 'Cadastrar Cliente' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isSubmitting = ref(false)

const form = reactive({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    birthDate: '',
    gender: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    observations: '',
    status: 'active'
})

const searchCep = async () => {
    if (form.cep.length === 9) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${form.cep.replace('-', '')}/json/`)
            const data = await response.json()

            if (!data.erro) {
                form.street = data.logradouro
                form.neighborhood = data.bairro
                form.city = data.localidade
                form.state = data.uf
            }
        } catch (error) {
            console.error('Erro ao buscar CEP:', error)
        }
    }
}

const handleSubmit = async () => {
    isSubmitting.value = true

    try {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log('Cliente cadastrado:', form)

        router.push('/clients')
    } catch (error) {
        console.error('Erro ao cadastrar cliente:', error)
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
.client-form {
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
    cursor: pointer;
    border: none;
}

.btn-primary {
    background: var(--color-primary);
    color: var(--color-white);
}

.btn-primary:hover:not(:disabled) {
    background: var(--color-primary-dark);
}

.btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-secondary {
    background: var(--color-bg-tertiary);
    color: var(--color-text-secondary);
    border: 1px solid var(--color-border);
}

.btn-secondary:hover {
    background: var(--color-bg-secondary);
}

.form-container {
    background: var(--color-bg-primary);
    border-radius: 0.75rem;
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    border: 1px solid var(--color-border);
}

.form {
    padding: 2rem;
}

.form-section {
    margin-bottom: 2rem;
}

.form-section:last-child {
    margin-bottom: 0;
}

.section-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid var(--color-border);
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .form-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group.full-width {
    grid-column: 1 / -1;
}

.form-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-border);
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    font-size: 0.875rem;
    transition: border-color var(--transition-base);
    box-shadow: var(--shadow-sm);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: var(--color-text-muted);
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
}

@media (max-width: 640px) {
    .form {
        padding: 1rem;
    }

    .form-actions {
        flex-direction: column;
    }

    .btn {
        justify-content: center;
    }
}
</style>
