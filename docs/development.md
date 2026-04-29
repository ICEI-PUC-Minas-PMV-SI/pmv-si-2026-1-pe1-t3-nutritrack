## 2. Especificação do Projeto

Para garantir a organização e o rastreamento do desenvolvimento do sistema, definimos os requisitos e as estruturas de dados conforme apresentado nas tabelas abaixo.

### 2.1 Requisitos de Funcionamento

| Identificação | Descrição do Requisito | Responsável | Artefato Criado |
| :--- | :--- | :--- | :--- |
| **RF-001** | O sistema deve permitir que o usuário gerencie seu cronograma de refeições | Equipe | `cronograma.html` |
| **RF-002** | O sistema deve permitir o registro e a visualização de calorias consumidas | Equipe | `index.html` |
| **RF-003** | O sistema deve permitir a escolha de planos nutricionais especializados | Equipe | `explorar.html` |
| **RF-004** | O sistema deve permitir o cadastro de um novo usuário com perfil definido | Equipe | `login.html` |

### 2.2 Descrição das Estruturas de Dados

Para a persistência das informações no sistema, foram definidas as seguintes estruturas:

**Tabela: Alimento / Registro de Consumo**

| Nome | Tipo | Categoria | Exemplo |
| :--- | :--- | :--- | :--- |
| **Id** | Número (Inteiro) | Identificador único | 1 |
| **Nome** | Texto | Nome da refeição | Arroz integral |
| **Calorias** | Número (Inteiro) | Valor calórico (kcal) | 150 |
| **Id do Usuário** | Número (Inteiro) | Identificador do proprietário | 1 |

**Tabela: Cronograma de Refeições**

| Nome | Tipo | Categoria | Exemplo |
| :--- | :--- | :--- | :--- |
| **Id** | Número (Inteiro) | Identificador do registro | 1 |
| **Refeicao** | Texto | Nome da refeição | Café da manhã |
| **Horario** | Hora | Horário da refeição | 08:00 |

## 3. Instruções de Implementação

* **Ambiente:** O projeto foi desenvolvido para execução *client-side*, utilizando tecnologias web padrão (HTML5, CSS3, JavaScript).
* **Persistência:** O sistema utiliza o `LocalStorage` do navegador para armazenamento local dos dados, dispensando configurações complexas de servidor.
* **Verificação de Dados:** Para conferir o armazenamento, o usuário deve abrir as ferramentas de desenvolvedor do navegador (F12), navegar até a aba **Application** (ou Armazenamento) e selecionar **Local Storage**. Os dados serão apresentados na forma de pares de chave-valor.
