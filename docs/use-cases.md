# Casos de Uso do Sistema

## Atores
- Usuário
- Administrador
- Sistema de Autenticação

## Caso de Uso 01 — Cadastrar Usuário
Ator: Usuário  
Descrição: Permite que um novo usuário crie uma conta.

Fluxo principal:
1. Usuário informa e-mail e senha
2. Sistema valida os dados
3. Sistema gera hash da senha
4. Sistema armazena o usuário
5. Sistema retorna confirmação

## Caso de Uso 02 — Autenticar Usuário (Login)
Ator: Usuário  
Descrição: Permite que o usuário realize login.

Fluxo principal:
1. Usuário informa credenciais
2. Sistema valida dados
3. Sistema gera token JWT
4. Sistema retorna token

## Caso de Uso 03 — Acessar Recurso Protegido
Ator: Usuário  
Descrição: Permite acesso a rotas protegidas com token válido.

Fluxo principal:
1. Usuário envia token
2. Sistema valida token
3. Sistema autoriza acesso

## Caso de Uso 04 — Controle de Acesso por Perfil
Ator: Administrador  
Descrição: Permite acesso a funcionalidades restritas.

Fluxo principal:
1. Sistema valida token
2. Sistema verifica perfil
3. Sistema concede ou nega acesso

