# ✅ Task Planner API – Automated API Testing with Cypress

This project demonstrates how to build a complete API testing framework using **Cypress** and **JavaScript**. It validates user and task endpoints with token-based authentication and covers full CRUD operations.

---

## 🔍 Features Covered

- User creation and authentication with token handling  
- CRUD operations for tasks and users (**POST**, **GET**, **PUT**, **DELETE**)  
- Error validation and negative test cases  
- Use of **intercepts** and **fixtures** to simulate backend behavior  
- Reusable **Custom Commands** to streamline test logic  

---

## 🧰 Tech Stack

- **Language:** JavaScript  
- **Test Framework:** Cypress  
- **Design Patterns:** Custom Commands, Fixtures  
- **Authentication:** Token-based  

---

## 📁 Project Structure
```
API-Testing-With-Cypress/
│
├── cypress/
│ ├── e2e/ # Test specifications for users and tasks
│ │ ├── users.cy.js
│ │ └── tasks.cy.js
│ ├── fixtures/ # JSON test data
│ └── support/ # Custom commands and setup
│ ├── commands.js
│ └── e2e.js
│
├── cypress.config.js # Cypress config file
├── package.json # Project dependencies and scripts
└── README.md # This file
```
---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/vinimj18/API-Testing-With-Cypress.git
cd API-Testing-With-Cypress
```
### 2. Install dependencies
```
bash
npm install
```
### 3. Run tests

Run in headless mode:
```
bash
npx cypress run
```
Or open the Cypress test runner UI:
```
bash
npx cypress open
```

📌 Highlights
- Token management automated inside Cypress custom commands
- Separation of concerns: logic (commands), data (fixtures), and tests (specs)
- Easy to extend with new endpoints or scenarios
- Real-world API testing patterns modeled for learning and practice

📄 License
This project is licensed under the MIT License.
Feel free to fork it, learn from it, or build your own on top of it!

👤 Author
Vinicius Maggiotto Justen
LinkedIn • GitHub
