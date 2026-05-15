# Teste de Software

## Plano de Testes de Software

| **Caso de Teste**         | **CT01 - Cadastro de usuário**                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Procedimento**          | 1) Acessar a tela de cadastro <br> 2) Escolher um perfil <br> 3) Inserir e-mail e senha válidos <br> 4) Clicar em "Criar Conta" |
| **Requisitos associados** | RF-001 - O sistema deve permitir cadastro de usuários                                                                           |
| **Resultado esperado**    | Usuário cadastrado com sucesso                                                                                                  |
| **Dados de entrada**      | E-mail e senha válidos                                                                                                          |
| **Resultado obtido**      | Sucesso                                                                                                                         |

---

| **Caso de Teste**         | **CT02 - Login no sistema**                                                           |
| ------------------------- | ------------------------------------------------------------------------------------- |
| **Procedimento**          | 1) Inserir e-mail cadastrado <br> 2) Inserir senha correta <br> 3) Clicar em "Entrar" |
| **Requisitos associados** | RF-002 - O sistema deve permitir autenticação de usuários                             |
| **Resultado esperado**    | Acesso à página principal                                                             |
| **Dados de entrada**      | Credenciais válidas                                                                   |
| **Resultado obtido**      | Sucesso                                                                               |

---

| **Caso de Teste**         | **CT03 - Registro de refeição**                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| **Procedimento**          | 1) Inserir nome do alimento <br> 2) Inserir calorias <br> 3) Clicar em "Lançar Refeição" |
| **Requisitos associados** | RF-003 - O sistema deve registrar refeições                                              |
| **Resultado esperado**    | Refeição adicionada corretamente                                                         |
| **Dados de entrada**      | Nome do alimento e calorias                                                              |
| **Resultado obtido**      | Sucesso                                                                                  |

---

| **Caso de Teste**         | **CT04 - Salvar cronograma alimentar**                                 |
| ------------------------- | ---------------------------------------------------------------------- |
| **Procedimento**          | 1) Editar horários das refeições <br> 2) Clicar em "Salvar Cronograma" |
| **Requisitos associados** | RF-004 - O sistema deve salvar cronogramas alimentares                 |
| **Resultado esperado**    | Cronograma salvo no sistema                                            |
| **Dados de entrada**      | Horários válidos                                                       |
| **Resultado obtido**      | Sucesso                                                                |

---

| **Caso de Teste**         | **CT05 - Escolha de plano nutricional**                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| **Procedimento**          | 1) Acessar página Explorar <br> 2) Selecionar um plano <br> 3) Clicar em "Seguir este Plano" |
| **Requisitos associados** | RF-005 - O sistema deve permitir seleção de planos                                           |
| **Resultado esperado**    | Perfil nutricional atualizado                                                                |
| **Dados de entrada**      | Seleção de plano                                                                             |
| **Resultado obtido**      | Sucesso                                                                                      |

---

# Registro dos Testes de Software

| *Caso de Teste*                  | *CT01 - Cadastro de usuário*  |
| -------------------------------- | ----------------------------- |
| Requisito Associado              | RF-001 - Cadastro de usuários |
| Link do vídeo do teste realizado | Inserir link do vídeo         |

---

| *Caso de Teste*                  | *CT02 - Login no sistema*  |
| -------------------------------- | -------------------------- |
| Requisito Associado              | RF-002 - Login de usuários |
| Link do vídeo do teste realizado | Inserir link do vídeo      |

---

| *Caso de Teste*                  | *CT03 - Registro de refeição*  |
| -------------------------------- | ------------------------------ |
| Requisito Associado              | RF-003 - Registro de refeições |
| Link do vídeo do teste realizado | Inserir link do vídeo          |

---

| *Caso de Teste*                  | *CT04 - Cronograma alimentar* |
| -------------------------------- | ----------------------------- |
| Requisito Associado              | RF-004 - Cronograma alimentar |
| Link do vídeo do teste realizado | Inserir link do vídeo         |

---

| *Caso de Teste*                  | *CT05 - Escolha de plano nutricional* |
| -------------------------------- | ------------------------------------- |
| Requisito Associado              | RF-005 - Planos nutricionais          |
| Link do vídeo do teste realizado | Inserir link do vídeo                 |

---

# Avaliação dos Testes de Software

Os testes realizados no sistema NutriTrack apresentaram resultados satisfatórios, demonstrando que as funcionalidades principais do sistema estão funcionando corretamente.

As funcionalidades de cadastro e login permitiram que os usuários acessassem o sistema sem dificuldades. O registro de refeições apresentou atualização automática das calorias totais e do gráfico de evolução diária. O cronograma alimentar também funcionou corretamente, permitindo salvar e visualizar os horários das refeições.

Como pontos fortes, destacam-se a interface moderna, facilidade de navegação e integração entre as páginas utilizando LocalStorage para armazenamento dos dados.

Entretanto, foram identificadas oportunidades de melhoria, como:

* melhoria na validação de campos;
* aumento da segurança do login;
* suporte para múltiplos usuários;
* utilização de banco de dados real.

Nas próximas iterações, o grupo pretende implementar autenticação mais segura, melhorias na responsividade e novas funcionalidades nutricionais.

---

# Testes de Usabilidade

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário                                                |
| ------------- | ------------------------------------------------------------------- |
| 1             | Você deseja criar uma conta e acessar o sistema NutriTrack.         |
| 2             | Você deseja registrar refeições e acompanhar suas calorias diárias. |
| 3             | Você deseja configurar seus horários de alimentação no cronograma.  |
| 4             | Você deseja selecionar um plano nutricional recomendado.            |

---

# Registro dos Testes de Usabilidade

## Cenário 1: Criar conta e acessar o sistema

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 1                                          | SIM             | 5                    | 18 segundos                     |
| 2                                          | SIM             | 5                    | 22 segundos                     |
| 3                                          | SIM             | 4                    | 25 segundos                     |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 4.67                 | 21.6 segundos                   |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 9 segundos                      |

Comentários dos usuários:
“O sistema ficou intuitivo e fácil de utilizar.”

---

## Cenário 2: Registrar refeições e acompanhar calorias

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 1                                          | SIM             | 5                    | 16 segundos                     |
| 2                                          | SIM             | 4                    | 20 segundos                     |
| 3                                          | SIM             | 5                    | 18 segundos                     |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 4.67                 | 18 segundos                     |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 7 segundos                      |

Comentários dos usuários:
“O gráfico facilitou a visualização da evolução diária.”

---

## Cenário 3: Configurar cronograma alimentar

| Usuário                                    | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| ------------------------------------------ | --------------- | -------------------- | ------------------------------- |
| 1                                          | SIM             | 5                    | 19 segundos                     |
| 2                                          | SIM             | 4                    | 24 segundos                     |
| 3                                          | SIM             | 5                    | 20 segundos                     |
|                                            |                 |                      |                                 |
| **Média**                                  | 100%            | 4.67                 | 21 segundos                     |
| **Tempo para conclusão pelo especialista** | SIM             | 5                    | 8 segundos                      |

Comentários dos usuários:
“A edição dos horários foi simples e prática.”

---

# Avaliação dos Testes de Usabilidade

Com base nos resultados obtidos, foi possível verificar que a aplicação NutriTrack apresentou bons resultados quanto à usabilidade e facilidade de utilização.

Os usuários conseguiram concluir os cenários propostos com sucesso, demonstrando que as funcionalidades principais do sistema estão intuitivas e acessíveis. As avaliações de satisfação ficaram entre 4 (bom) e 5 (ótimo), indicando boa aceitação da interface.

Foi observada diferença entre o tempo dos usuários e o tempo do especialista, algo esperado devido ao conhecimento prévio do desenvolvedor sobre a estrutura do sistema.

Apesar dos resultados positivos, foram identificadas melhorias futuras relacionadas à acessibilidade, validação de campos, navegação mobile e mensagens de feedback mais detalhadas ao usuário.
