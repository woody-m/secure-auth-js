# Contratos da API

## Base URL
/api/v1

## Autenticação

### POST /auth/register
Cria um novo usuário.

### POST /auth/login
Autentica usuário e retorna token JWT.

## Rotas Protegidas

### GET /profile
Retorna dados do usuário autenticado.

### GET /admin
Acesso restrito a administradores.

