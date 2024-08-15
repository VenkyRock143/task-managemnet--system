- # Task Management System API

This repository contains a RESTful API for a Task Management System, built with Node.js, Express, and PostgreSQL. 
The API provides comprehensive functionality for user authentication, task management (CRUD operations), task assignment, and advanced features like filtering, searching, and role-based access control (RBAC).

## Folder Stucture
```sh
├── .github
│   ├──workflows
│   |  └──ci.yml
├── config
│   └──database.js
│
├── controllers
│   ├──authController.js
│   └──taskController.js
│
├── middlewares
│   └──authMiddleware.js
│
├── models
│   ├──task.js
│   └──user.js
│
├── routes
│   ├──authRoutes.js
│   └──taskRoutes.js
│
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── server.js
└── README.md

```
## Key Features
- User Registration and Authentication
Secure password hashing and JWT-based authentication.
- Task Management
Create, read, update, and delete tasks.
Task assignment to specific users.
- Advanced Task Features
Filtering tasks by status, priority, and due date.
Search functionality for tasks based on title and description.
Pagination for task lists.
- Role-Based Access Control (RBAC)
Admin and User roles with different permissions.
- Dockerized Deployment
Docker and Docker Compose for easy containerization and deployment.
- CI/CD Pipeline
Automated testing and deployment using GitHub Actions.

## Technologies Used
1. Backend: Node.js, Express.js
2. Database: PostgreSQL, Sequelize ORM
3. Authentication: JWT (JSON Web Token)
4. Testing: Jest, Supertest
5. Containerization: Docker, Docker Compose
6. CI/CD: GitHub Actions

## Getting Started
1. Clone the Repository
```sh
- git clone https://github.com/yourusername/task-management-system.git
- cd task-management-system
```
2. Install Dependencies
```sh
Install the required npm packages:
- npm install
```
3. Set Up Environment Variables
```sh
Create a .env file in the root directory and populate it with the following variables:
- DB_HOST=localhost
- DB_NAME=task_management
- DB_USER=your_db_user
- DB_PASSWORD=your_db_password
- JWT_SECRET=your_secret_key
- PORT=3000
```
4. Set Up PostgreSQL Database
```sh
Ensure PostgreSQL is running on your machine. Then, create the necessary database and user:
- CREATE DATABASE task_management;
- CREATE USER your_db_user WITH PASSWORD 'your_db_password';
- GRANT ALL PRIVILEGES ON DATABASE task_management TO your_db_user;
```
5. Run the Application Locally
```sh
Start the application using:
- npm start
The server will run on http://localhost:3000.
```
6. Run Tests
```sh
Execute the unit and integration tests using:
- npm test
```
7. Run with Docker
```sh
To run the application in a Docker container, use the following command:
- docker-compose up --build
```

## API Documentation
The following API endpoints are available:
User Registration:
-POST /api/auth/register
User Login:
-POST /api/auth/login
Create Task:
-POST /api/tasks
Get All Tasks:
-GET /api/tasks
Update Task:
-PUT /api/tasks/:taskId
Delete Task:
-DELETE /api/tasks/:taskId

## CI/CD Pipeline
- This project is configured with a GitHub Actions CI/CD pipeline. The pipeline runs tests and deploys the application automatically on every push to the repository.

## Approach and Assumptions
Approach
Modular Architecture:
The project is designed with a modular architecture, dividing the code into controllers, models, routes, and middleware. This structure enhances maintainability and scalability.
-Security:
Passwords are securely hashed using bcrypt, and JWT is used for authentication. Sensitive information is managed using environment variables.
-Database Management:
PostgreSQL is utilized for data storage, managed via Sequelize ORM. The database schema is designed to efficiently handle task management, user roles, and task assignments.
-Testing:
Comprehensive unit and integration tests are implemented using Jest and Supertest to ensure code reliability.
-Dockerization:
Docker is employed to containerize the application, allowing for consistent deployment across different environments. Docker Compose manages the multi-container setup.
-CI/CD Integration:
GitHub Actions is configured to automate testing and deployment, ensuring that the code is always in a deployable state.

## Assumptions
-User Roles:
The system assumes the existence of two roles: Admin and User. Admins have elevated permissions, such as the ability to delete tasks.
-Task Statuses:
The task statuses are predefined as "Todo", "In Progress", and "Done". These are considered sufficient for most task management use cases.
-Ownership:
Each task is associated with a specific user, implying that only the owner of a task or an admin can modify it.
-Environment Configuration:
It is assumed that the PostgreSQL database is configured according to the provided environment variables and that the developer has the necessary access.
