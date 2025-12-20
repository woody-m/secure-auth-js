---
# 🔐 SecureAuth JS
---

Overview
SecureAuth JS is a Full Stack authentication system built with Node.js, designed to demonstrate real-world authentication and authorization patterns following security best practices, clean architecture, and software engineering discipline.
This project goes beyond basic login systems by implementing JWT-based authentication, Role-Based Access Control (RBAC), secure password handling, and protected routes, simulating how authentication is designed and enforced in production-grade applications.
It was developed with a strong focus on security-first design, clarity, and portfolio readiness.

---

🎯 Project Goals
---
The main goal of this project is to demonstrate a complete and secure authentication flow, including:
User registration with secure password hashing
Login with credential validation
JWT generation, validation, and expiration
Protected backend routes
Role-Based Access Control (admin / user)
Frontend and backend integration
Manual security testing and validation
Clear separation of concerns using controllers, services, and middleware

---

🧠 Problem Statement
---
Many applications implement authentication in a superficial or insecure way, which often leads to:
Plain text or weakly hashed passwords
Tokens without expiration
Sensitive routes exposed without authorization checks
Lack of role-based access control
Excessive trust in frontend validation
These issues are common in beginner projects and represent real security risks in production systems.

---

✅ Solution
---
SecureAuth JS addresses these problems by applying industry-recommended security practices, such as:
Password hashing using bcrypt
Stateless authentication using JWT
Token expiration and validation
Backend route protection via middleware
Role-Based Access Control (RBAC)
Environment variable management
Minimal and secure frontend token handling
Backend-first validation
In addition, the project includes structured manual security testing to validate correct and secure behavior.

---

🏗️ System Architecture
---
The project follows a layered architecture, clearly separating responsibilities:
Routes: API endpoints
Controllers: HTTP request and response handling
Services: Business logic and validation
Middlewares: Authentication and authorization
Database: SQLite for local persistence
Frontend: Minimal interface to consume the API
All security rules are enforced exclusively on the backend.

---

🏗️ Logical Architecture Diagram
---
```
[ Browser / Frontend ]
           |
           | HTTP Requests (JSON + JWT)
           v
[ API Routes ]
           |
           v
[ Controllers ]
           |
           v
[ Services ]
           |
           v
[ Database (SQLite) ]
```
---

🔐 Security Flow
---
Credentials are transmitted only during login
Passwords are always stored using secure hashing
A JWT is issued after successful authentication
A valid JWT is required to access protected routes
RBAC is enforced via middleware
The frontend never decides permissions

---

🧩 Project Structure
---
```
secure-auth-js/
│
├── backend/
│   ├── database.sqlite          # SQLite database (local development)
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── src/
│       ├── controllers/         # HTTP layer
│       ├── services/            # Business logic
│       ├── middlewares/         # Authentication & authorization
│       ├── routes/              # API routes
│       ├── config/              # App and database configuration
│       ├── utils/               # Helpers (JWT, hashing)
│       └── server.js            # Backend entry point
│
├── frontend/
│   ├── index.html               # Login page
│   ├── register.html            # Registration
│   ├── profile.html             # Protected area
│   ├── style.css                # Styles
│   └── script.js                # API integration
│
├── docs/                        # Technical documentation
│
├── database.sqlite
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
```

---

🔐 Security Considerations and Tests Performed
---
Passwords are never stored in plain text
Passwords are hashed using bcrypt
JWT tokens include expiration and validation
Protected routes require authentication
RBAC enforces access control
Frontend does not enforce security rules
Manual Security Tests
Password exposure checks (frontend, API, logs, database)
JWT validation (valid, invalid, expired, missing)
Access to protected routes without authentication
Role-based access validation
Token expiration enforcement
Direct API testing with curl and Postman

---

🚀 How to Run Locally
---
Backend
git clone https://github.com/woody-m/secure-auth-js.git
cd secure-auth-js/backend
npm install
cp .env.example .env
npm run dev
If .env.example is not present, create a .env file manually.
Server will start at:
http://localhost:3000
Frontend
Open the frontend HTML files directly in the browser or use a local static server.

---

📌 Project Status
---
✔️ Completed
✔️ Manually tested
✔️ Secure by design
✔️ Portfolio-ready

---

📄 License
This project was developed for educational and portfolio purposes.

---

🔐 SecureAuth JS (Português)
---
Visão Geral
SecureAuth JS é um sistema de autenticação Full Stack desenvolvido com Node.js, criado para demonstrar fluxos reais de autenticação e autorização, seguindo boas práticas de segurança, arquitetura limpa e engenharia de software aplicada.
O projeto vai além de sistemas básicos de login ao implementar autenticação com JWT, controle de acesso por papéis (RBAC), tratamento seguro de senhas e proteção de rotas, simulando aplicações de nível profissional.
Foi desenvolvido com foco em segurança por design, clareza técnica e prontidão para portfólio.

---

🎯 Objetivo do Projeto
---
Demonstrar um fluxo completo e seguro de autenticação, incluindo:
Cadastro de usuários com hash seguro de senha
Login com validação de credenciais
Geração, validação e expiração de JWT
Proteção de rotas no backend
Controle de acesso por papéis (admin / user)
Integração entre frontend e backend
Testes manuais de segurança
Separação clara de responsabilidades

---

🧠 Problema
---
Muitas aplicações implementam autenticação de forma superficial ou insegura, o que pode causar:
Armazenamento inseguro de senhas
Tokens sem expiração
Rotas sensíveis expostas
Falta de controle de permissões
Confiança excessiva no frontend
Esses problemas representam riscos reais em ambientes de produção.

---

✅ Solução
---
O SecureAuth JS resolve esses problemas aplicando práticas consolidadas:
Hash de senhas com bcrypt
Autenticação stateless com JWT
Expiração e validação de tokens
Proteção de rotas via middleware
Controle de acesso por papéis (RBAC)
Uso correto de variáveis de ambiente
Validação sempre no backend
Além disso, o projeto inclui testes manuais estruturados para garantir comportamento seguro.

---

🏗️ Arquitetura do Sistema
---
O sistema utiliza uma arquitetura em camadas, separando:
Rotas
Controllers
Services
Middlewares
Persistência de dados
Frontend mínimo para consumo da API
Toda a lógica de segurança é aplicada exclusivamente no backend.

---

🔐 Segurança e Testes Realizados
---
Senhas nunca armazenadas em texto puro
Tokens com expiração obrigatória
Rotas protegidas por autenticação
Permissões controladas por papéis
Nenhuma regra de segurança no frontend
Testes Manuais
Testes de acesso sem autenticação
Testes de autorização por papel
Testes de expiração de token
Testes diretos via Postman e curl

---

📌 Status do Projeto
---
✔️ Concluído
✔️ Testado manualmente
✔️ Seguro por design
✔️ Pronto para portfólio

---
### 📄 Licença este projeto foi desenvolvido para fins educacionais e de portfólio.
---
👩‍💻 Desenvolvido por
Bruna Woodymila S. Lopes
Estudante de Engenharia de Software
Full Stack • Desenvolvimento com foco em Segurança
GitHub: https://github.com/woody-m 🇧🇷
Built with a security-first mindset, clean architecture principles, and real-world authentication practices.
Desenvolvido com mentalidade security-first, princípios de arquitetura limpa e práticas reais de autenticação.
