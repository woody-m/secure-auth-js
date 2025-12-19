# Segurança da API

## Autenticação
- JWT assinado com HS256
- Payload mínimo: id, role
- Expiração: 1h

## Autorização (RBAC)
- Roles suportadas: user, admin
- Middleware `authorizeRoles`

## Rotas protegidas
- GET /api/v1/profile → usuário autenticado
- GET /api/v1/admin → apenas admin

## Boas práticas
- Senhas com bcrypt
- Erros genéricos para evitar enumeration
- Tokens enviados via Authorization Bearer

