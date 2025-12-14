# Fluxo de Autenticação

## Cadastro
1. Entrada de e-mail e senha
2. Validação de formato
3. Geração de hash (bcrypt)
4. Persistência no banco
5. Confirmação ao usuário

## Login
1. Entrada de e-mail e senha
2. Comparação com hash armazenado
3. Geração de JWT
4. Retorno do token

## Acesso Protegido
1. Cliente envia token no header
2. Middleware valida token
3. Acesso liberado ou bloqueado

