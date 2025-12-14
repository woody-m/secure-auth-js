# Modelo de Dados

## Entidade: User

| Campo       | Tipo     | Descrição                          |
|-------------|----------|------------------------------------|
| id          | Integer  | Identificador único                |
| email       | String   | E-mail do usuário (único)          |
| password    | String   | Hash da senha                      |
| role        | String   | Perfil de acesso (user/admin)      |
| created_at | DateTime | Data de criação                    |
| updated_at | DateTime | Data de atualização                |

## Regras
- Senha nunca armazenada em texto puro
- E-mail único
- Role controlada pelo sistema

