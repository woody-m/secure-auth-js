# Entendimento do Problema

Aplicações web modernas precisam identificar usuários e controlar o acesso
a recursos de forma segura. No entanto, muitas implementações de autenticação
são feitas de maneira inadequada, expondo sistemas a riscos críticos.

Entre os principais problemas encontrados em projetos comuns estão:
- Senhas armazenadas em texto puro ou com hash fraco
- Falta de controle adequado de sessão
- Ausência de proteção para rotas sensíveis
- Uso incorreto de tokens ou ausência de expiração
- Mistura de responsabilidades no código, dificultando manutenção

O problema não é apenas “fazer login funcionar”, mas garantir identidade,
controle de acesso e proteção de dados desde o backend.

Falhas nesse ponto podem resultar em:
- Vazamento de dados pessoais
- Acesso não autorizado a informações sensíveis
- Comprometimento total da aplicação
- Perda de confiança do usuário
- Impactos legais, como os previstos pela LGPD

A maioria dos ataques bem-sucedidos em aplicações web
explora falhas nos mecanismos de autenticação ou autorização.

