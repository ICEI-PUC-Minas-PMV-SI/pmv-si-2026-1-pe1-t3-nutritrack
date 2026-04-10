# Especificações do Projeto

Nesta seção são apresentadas as especificações do projeto NutriTrack, incluindo a definição de personas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições do sistema. Essas informações foram elaboradas com base na análise do problema de controle alimentar e têm como objetivo guiar o desenvolvimento da solução de forma alinhada às necessidades dos usuários.

---

## 👤 Personas

### 1. Estudante Prático
Jovem universitário que estuda e trabalha, possuindo rotina corrida e pouco tempo para registrar sua alimentação de forma detalhada.

**Necessidades:**
- Registro rápido das refeições  
- Interface simples e objetiva  
- Resumo diário de calorias consumidas  

---

### 2. Iniciante na Reeducação Alimentar
Pessoa que decidiu melhorar a alimentação recentemente e ainda não possui conhecimento sobre calorias e nutrientes dos alimentos.

**Necessidades:**
- Identificação e registro simples dos alimentos  
- Informações nutricionais básicas  
- Apoio para aprender a controlar a dieta  

---

### 3. Praticante de Atividades Físicas
Usuário que frequenta academia e busca controle alimentar para atingir objetivos como ganho de massa ou perda de peso.

**Necessidades:**
- Controle de calorias e macronutrientes  
- Acompanhamento de metas diárias  
- Histórico de consumo alimentar  

---

## 📖 Histórias de Usuário

- Como usuário, quero criar uma conta no sistema para acessar minhas informações de alimentação.  
- Como usuário, quero registrar alimentos consumidos para controlar minha dieta.  
- Como usuário, quero visualizar o total de calorias ingeridas no dia para acompanhar minha alimentação.  
- Como usuário, quero editar ou excluir registros para corrigir informações incorretas.  
- Como usuário, quero acessar o sistema de qualquer dispositivo para acompanhar minha alimentação em qualquer lugar.  
- Como usuário iniciante, quero entender melhor os alimentos consumidos para aprender a me alimentar melhor.  
- Como usuário praticante de atividades físicas, quero acompanhar minhas metas calóricas diárias para melhorar meu desempenho.  

---

## ⚙️ Requisitos Funcionais

| ID | Descrição | Prioridade |
|----|----------|------------|
| RF-01 | O sistema deve permitir o cadastro de usuários | Alta |
| RF-02 | O sistema deve permitir o registro de alimentos consumidos | Alta |
| RF-03 | O sistema deve calcular o total de calorias diárias | Alta |
| RF-04 | O sistema deve permitir editar ou excluir registros de alimentos | Alta |
| RF-05 | O sistema deve exibir histórico de consumo alimentar | Média |
| RF-06 | O sistema deve permitir categorização das refeições (café, almoço, etc.) | Média |
| RF-07 | O sistema deve gerar resumo diário de consumo calórico | Média |
| RF-08 | O sistema deve permitir acesso em diferentes dispositivos | Média |

---

## ⚙️ Requisitos Não Funcionais

| ID | Descrição | Prioridade |
|----|----------|------------|
| RNF-01 | O sistema deve ser desenvolvido em HTML, CSS e JavaScript | Alta |
| RNF-02 | O sistema deve ser responsivo para dispositivos móveis | Alta |
| RNF-03 | O sistema deve ter interface simples e intuitiva | Alta |
| RNF-04 | O sistema deve funcionar em navegadores modernos | Alta |
| RNF-05 | O sistema deve carregar as páginas em tempo adequado | Média |

---

## 🚫 Restrições

| ID | Restrição |
|----|----------|
| 01 | O projeto deve ser entregue até o final do semestre |
| 02 | O sistema será desenvolvido apenas com tecnologias front-end (HTML, CSS e JavaScript) |
| 03 | Não haverá uso de backend ou banco de dados externo neste estágio |
