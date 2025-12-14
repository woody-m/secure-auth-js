# Requisitos do Sistema

## 1. Requisitos Funcionais (RF)

- RF01 — Cadastro de Usuários: o sistema deve permitir o cadastro de usuários com e-mail e senha.
- RF02 — Validação de Credenciais: o sistema deve validar e-mail único e critérios mínimos de senha.
- RF03 — Hash de Senhas: o sistema deve armazenar senhas apenas em formato de hash seguro.
- RF04 — Autenticação de Usuário: o sistema deve permitir login com credenciais válidas.
- RF05 — Geração de Token: o sistema deve gerar um token JWT após autenticação bem-sucedida.
- RF06 — Expiração de Token: o token deve possuir tempo de expiração configurável.
- RF07 — Proteção de Rotas: o sistema deve restringir acesso a rotas protegidas.
- RF08 — Controle de Acesso por Perfil: o sistema deve diferenciar permissões entre usuários e administradores.
- RF09 — Logout: o sistema deve permitir o encerramento da sessão no cliente.

## 2. Requisitos Não Funcionais (RNF)

- RNF01 — Segurança: o sistema deve seguir boas práticas recomendadas pela OWASP.
- RNF02 — Desempenho: respostas de autenticação devem ocorrer em tempo aceitável.
- RNF03 — Escalabilidade: a arquitetura deve permitir evolução futura.
- RNF04 — Manutenibilidade: o código deve ser modular e organizado.
- RNF05 — Portabilidade: o sistema deve rodar localmente sem dependências complexas.
- RNF06 — Observabilidade Básica: o sistema deve retornar mensagens de erro claras.

## 3. Restrições Técnicas (RT)

- RT01 — Linguagem: backend em JavaScript (Node.js).
- RT02 — Framework: uso do Express.
- RT03 — Autenticação: baseada em JWT.
- RT04 — Banco de Dados: uso de SQLite na fase inicial.
- RT05 — Gerenciamento de Segredos: uso de variáveis de ambiente.
- RT06 — Versionamento: Git e GitHub.

