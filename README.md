## 🔐 SecureAuth JS
SecureAuth JS is a Full Stack authentication system built with Node.js, created to demonstrate real-world security best practices, clean architecture, and correct authentication and authorization flows as applied in production environments.
The project implements JWT-based authentication, Role-Based Access Control (RBAC), and strict separation of responsibilities, following a professional software engineering workflow, from system design to manual security testing.
---
## 🎯 Project Objective
To demonstrate the construction of a complete and secure authentication flow, covering:
* User registration
* Secure login
* Credential hashing and protection
* JWT generation, validation, and expiration
* Backend route protection
* Role-based access control (admin / user)
* Proper frontend and backend integration
* Manual security testing
This project prioritizes solid fundamentals, avoiding excessive framework dependence and focusing on concepts reusable across any stack.
---
## 🧠 Problem
In many systems, authentication is implemented superficially, which can result in:
* Insecure password storage
* Tokens without expiration or proper validation
* Sensitive routes accessible without authorization
* Security rules delegated to the frontend
* High coupling between layers
These issues increase the attack surface and operational risk of the application.
---
## ✅ Adopted Solution
SecureAuth JS addresses these issues by applying established industry practices:
* Secure password hashing with bcrypt
* Stateless authentication using JSON Web Tokens (JWT)
* Explicit token expiration control
* Dedicated authentication and authorization middleware
* Role-Based Access Control (RBAC)
* Clear separation of responsibilities per layer
* Manual positive and negative security tests
All security decisions are enforced exclusively on the backend.
---
## 🛠️ Technologies Used
Backend

* Node.js
* Express
* SQLite
* bcrypt
* JSON Web Tokens (JWT)
* dotenv 

Frontend
* HTML
* CSS
* Vanilla JavaScript
---
## 🏗️ System Architecture
The system follows a layered architecture with well-defined responsibilities:
* Frontend: User interface and API consumption (no security rules)
* Routes: Definition of application endpoints
* Controllers: HTTP request validation and response formatting
* Services: Business logic, authentication, and token generation
* Middlewares: Authentication, authorization, RBAC, and error handling
* Models: Data persistence and database access
* Database: Local usage for development, not versioned
All security logic is applied server-side. 
---
## 🏗️ Logical Architecture Diagram

[ Browser / Frontend ]
           |
           | HTTP Requests (JSON + JWT)
           v
[ API Routes (Express) ]
           |
           v
[ Controllers ]
           |
           v
[ Services ]
           |
           v
[ Models ]
           |
           v
[ SQLite Database ]
---
## 🔐 Security Flow
* Credentials are transmitted only during login
* Passwords are always stored using secure hashing
* A JWT is issued after successful authentication
* A valid JWT is required to access protected routes
* RBAC is enforced via middleware
* The frontend never decides permissions
---

## 🗂️ Project Structure

secure-auth-js/
│
├── backend/
│   └── src/
│       ├── config/        # Configuration (database)
│       ├── controllers/  # HTTP layer (API entry point)
│       ├── middlewares/  # Authentication, authorization, errors
│       ├── models/       # Models and database access
│       ├── routes/       # Route definitions
│       ├── services/     # Business logic
│       └── utils/        # Utilities (JWT, helpers)
│
├── frontend/
│   ├── index.html        # Login
│   ├── register.html     # Registration
│   ├── profile.html      # Protected area
│   ├── style.css         # Styles
│   └── script.js         # API integration
│
├── docs/                 # Technical documentation
│
├── database.sqlite       # Local database (ignored)
├── .env                  # Environment variables (ignored)
├── .gitignore            # Git rules
├── package.json          # Project configuration
├── package-lock.json     # Dependency lock file
└── README.md             # Documentation
---
## 🔐 Security Features Implemented
* Secure password hashing with bcrypt
* JWT with expiration time
* Authorization via HTTP headers
* Backend protection of sensitive routes
* Role-based access control (RBAC)
* No exposure of sensitive data
* Protected environment variables
* Removal of sensitive debug logs after testing
---
## 🧪 Security Tests Performed
Tests were conducted manually, simulating realistic usage and abuse scenarios, with a focus on access control and security validation.
## 🔑 Authentication
* User registration with valid credentials
* Registration attempts with invalid data
* Login with correct credentials
* Login with incorrect password
* Login with non-existent user
* Verification that passwords are never stored in plaintext
## 🎟️ JWT (Token)
* JWT generation after successful login
* Validation of a valid JWT on protected routes
* Access denial without a token
* Access denial with an invalid token
* Access denial with an expired token
* Confirmation that the token:
  * Does not appear in URLs
  * Does not appear in logs
  * Is not exposed beyond local storage on the frontend
## 🔐 Authorization and RBAC
* Access granted according to user role
* Denial of standard users accessing admin routes
* Permission validation via middleware
* Confirmation that permissions are never controlled by the frontend
## 🧭 Protected Routes
* Direct access attempts to protected routes without authentication
* Frontend access attempts without JWT
* Access attempts with invalid or missing JWT
* Verification of appropriate HTTP responses (401 / 403)
## 🚪 Logout and Session
* Token removal on logout
* Access denial after logout
* Confirmation that sessions do not persist without a valid token
## 🖥️ Frontend
* Confirmation that sensitive data is not rendered
* Verification that the frontend contains no security logic
* Assurance that all critical validation occurs on the backend
These tests validate that the system does not trust the client, enforces security by default, and resists common misuse patterns.
---
## ▶️ How to Run the Project

npm install
npm run dev

Access the application at:

http://localhost:3000
---
## 📌 Project Status
✔️ Completed ✔️ Manually tested ✔️ Secure by design ✔️ Portfolio-ready
---
## 📄 License
This project was developed for educational and portfolio 
purposes.

Built with a security-first mindset, clean architecture principles, and real-world authentication practices.
— Bruna Woodymila S. Lopes
---
## 🇧🇷 🔐 SecureAuth JS
SecureAuth JS é um sistema de autenticação Full Stack desenvolvido com Node.js, criado para demonstrar boas práticas reais de segurança, arquitetura limpa e fluxos corretos de autenticação e autorização, como aplicados em ambientes de produção.
O projeto implementa autenticação baseada em JWT, controle de acesso por perfil (RBAC) e separação rigorosa de responsabilidades, seguindo um fluxo profissional de engenharia de software, do design do sistema até testes manuais de segurança.
---
## 🎯 Objetivo do Projeto
Demonstrar a construção de um fluxo completo e seguro de autenticação, cobrindo:
* Cadastro de usuários
* Login seguro
* Hash e proteção de credenciais
* Geração, validação e expiração de JWT
* Proteção de rotas no backend
* Controle de acesso por perfil (admin / user)
* Integração correta entre frontend e backend
* Testes manuais de segurança
---
## 🧠 Problema
Em muitos sistemas, a autenticação é implementada de forma superficial, o que pode resultar em:
* Armazenamento inseguro de senhas
* Tokens sem expiração ou validação
* Rotas sensíveis acessíveis sem autorização
* Regras de segurança delegadas ao frontend
* Alto acoplamento entre camadas
Essas falhas aumentam a superfície de ataque e o risco operacional da aplicação.
---
## ✅ Solução Adotada
O SecureAuth JS resolve esses problemas aplicando práticas consolidadas de mercado:
* Hash seguro de senhas com bcrypt
* Autenticação stateless com JSON Web Tokens (JWT)
* Controle explícito de expiração de tokens
* Middleware dedicado para autenticação e autorização
* RBAC (Role-Based Access Control)
* Separação clara de responsabilidades por camada
* Testes manuais positivos e negativos
Todas as decisões de segurança são feitas exclusivamente no backend.
---
## 🛠️ Tecnologias Utilizadas
Backend
* Node.js
* Express
* SQLite
* bcrypt
* JSON Web Tokens (JWT)
* dotenv

Frontend
* HTML
* CSS
* JavaScript puro (Vanilla JavaScript)
---
## 🏗️ Arquitetura do Sistema
O sistema segue uma arquitetura em camadas, com responsabilidades bem definidas:
* Frontend: Interface do usuário e consumo da API (sem regras de segurança)
* Rotas: Definição dos endpoints da aplicação
* Controllers: Validação de requisições e formatação de respostas HTTP
* Services: Regras de negócio, autenticação e geração de tokens
* Middlewares: Autenticação, autorização, RBAC e tratamento de erros
* Models: Persistência e acesso aos dados
* Banco de Dados: Uso local para desenvolvimento, não versionado
Toda a lógica de segurança é aplicada no lado do servidor.
---
##  🏗️ Diagrama Lógico da Arquitetura

[ Navegador / Frontend ]
           |
           | Requisições HTTP (JSON + JWT)
           v
[ Rotas da API (Express) ]
           |
           v
[ Controllers ]
           |
           v
[ Services ]
           |
           v
[ Models ]
           |
           v
[ Banco de Dados SQLite ]
---
## 🔐 Fluxo de Segurança
* Credenciais trafegam apenas no login
* Senhas são sempre armazenadas com hash
* JWT é emitido após autenticação válida
* JWT é obrigatório em rotas protegidas
* RBAC é aplicado via middleware
* O frontend nunca decide permissões
---
## 🗂️ Estrutura do Projeto

secure-auth-js/
│
├── backend/
│   └── src/
│       ├── config/        # Configurações (database)
│       ├── controllers/  # Camada HTTP (entrada da API)
│       ├── middlewares/  # Autenticação, autorização e erros
│       ├── models/       # Modelos e acesso ao banco
│       ├── routes/       # Definição das rotas
│       ├── services/     # Regras de negócio
│       └── utils/        # Utilitários (JWT, helpers)
│
├── frontend/
│   ├── index.html        # Login
│   ├── register.html     # Cadastro
│   ├── profile.html      # Área protegida
│   ├── style.css         # Estilos
│   └── script.js         # Integração com API
│
├── docs/                 # Documentação técnica
│
├── database.sqlite       # Banco local (ignorado)
├── .env                  # Variáveis de ambiente (ignorado)
├── .gitignore            # Regras do Git
├── package.json          # Configuração do projeto
├── package-lock.json     # Lock de dependências
└── README.md             # Documentação
---
## 🔐 Segurança Implementada
* Hash seguro de senhas com bcrypt
* JWT com tempo de expiração
* Autorização via headers HTTP
* Proteção de rotas sensíveis no backend
* Controle de acesso por perfil (RBAC)
* Não exposição de dados sensíveis
* Variáveis de ambiente protegidas
* Remoção de logs sensíveis após testes
---
## 🧪 Testes de Segurança Realizados
Os testes foram realizados manualmente, simulando cenários reais de uso e abuso, com foco em validação de segurança e controle de acesso.
## 🔑 Autenticação
* Cadastro de usuário com senha válida
* Tentativa de cadastro com dados inválidos
* Login com credenciais corretas
* Login com senha incorreta
* Login com usuário inexistente
* Verificação de hash de senha no banco (senha nunca armazenada em texto puro)
## 🎟️ JWT (Token)
* Geração de JWT após login bem-sucedido
* Validação de JWT válido em rotas protegidas
* Bloqueio de acesso sem token
* Bloqueio de acesso com token inválido
* Bloqueio de acesso com token expirado
* Confirmação de que o token:
 * Não aparece em URLs
 * Não aparece em logs
 * Não é exposto no frontend além do armazenamento local
## 🔐 Autorização e RBAC
* Acesso permitido a rotas conforme perfil do usuário
* Bloqueio de usuário comum em rotas administrativas
* Validação de permissões via middleware
* Garantia de que permissões não são controladas pelo frontend
## 🧭 Rotas Protegidas
* Teste de acesso direto a rotas protegidas sem autenticação
* Teste de acesso via frontend sem JWT
* Teste de acesso com JWT inválido ou ausente
* Confirmação de resposta HTTP adequada (401 / 403)
## 🚪 Logout e Sessão
* Remoção do token no logout
* Bloqueio de acesso após logout
* Confirmação de que a sessão não persiste sem token
## 🖥️ Frontend
* Garantia de que dados sensíveis não são exibidos
* Verificação de que o frontend não contém regras de segurança
* Confirmação de que toda validação crítica ocorre no backend
Esses testes validam que o sistema não confia no cliente, aplica segurança por padrão e resiste a usos indevidos comuns.
---
## ▶️ Como Executar o Projeto

npm install
npm run dev

Acesse a aplicação em:

http://localhost:3000
---
## 📌 Status do Projeto
✔️ Concluído ✔️ Testado manualmente ✔️ Seguro por design ✔️ Pronto para portfólio
---
## 📄 Licença
Projeto desenvolvido para fins educacionais e de portfólio.
 
Desenvolvido com mentalidade security-first, princípios de arquitetura limpa e práticas reais de autenticação.
— Bruna Woodymila S. Lopes 
---
