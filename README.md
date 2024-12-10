# Task Manager Application

This project is a task management application where users can create, update, and delete tasks. It involves user authentication, database integration, and reminders/notifications. The application is built with a Node.js backend and a React frontend.

## Table of Contents
- [Getting Started](#getting-started)
- [Backend](#backend)
- [Frontend](#frontend)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Tech Stack](#tech-stack)

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/task-manager.git
    cd task-manager
    ```

2. Install dependencies for both backend and frontend:
    ```sh
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

### Running the Application

1. Start the backend server:
    ```sh
    cd backend
    npm run dev
    ```

2. Start the frontend development server:
    ```sh
    cd frontend
    npm start
    ```

### Environment Variables

Create a `.env` file in the `backend` directory with the following content:

MONGO_URI=your_mongo_connection_string JWT_SECRET=your_jwt_secret

## Backend

The backend is built with Node.js, Express, and MongoDB. It handles user authentication, task management, and sending reminders/notifications.

### Directory Structure

/backend
├── /config
│   └── db.js
├── /controllers
│   └── taskController.js
│   └── userController.js
├── /models
│   └── Task.js
│   └── User.js
├── /routes
│   └── tasks.js
│   └── users.js
├── /middlewares
│   └── authMiddleware.js
├── .env
├── app.js
├── package.json
├── server.js


## Frontend

The frontend is built with React and integrates with the backend via API calls.

### Directory Structure

/frontend
├── /public
│   └── index.html
├── /src
│   └── /components
│       └── Task.js
│       └── TaskList.js
│       └── Login.js
│       └── Register.js
│   └── /contexts
│       └── AuthContext.js
│   └── /hooks
│       └── useTasks.js
│   └── /services
│       └── api.js
│   └── App.css
│   └── App.js
│   └── index.js
├── package.json

## API Endpoints

### User Endpoints
- `POST /api/users/register`: Register a new user
- `POST /api/users/login`: Authenticate a user

### Task Endpoints
- `GET /api/tasks`: Get all tasks for a user
- `POST /api/tasks`: Create a new task
- `PUT /api/tasks/:id`: Update a task
- `DELETE /api/tasks/:id`: Delete a task

## Features
- User authentication
- Task management (CRUD operations)
- Reminders/Notifications
- Responsive design

## Tech Stack
- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React
- **Authentication**: JWT, bcrypt
- **Notifications**: Optional (Firebase Cloud Messaging, OneSignal, etc.)

## License
This repository is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as needed for your projects.

## Author
Benjamin Caron - https://github.com/bcaron518

## Contributing
If you'd like to contribute to this repository or improve the code examples, please feel free to open an issue or submit a pull request. Your contributions are welcome.
