# Todo App Backend

<!-- ![Todo App Logo](todo-app-logo.png) -->

This is the backend for a Todo App built using Node.js, Express, and MongoDB. It provides the necessary API endpoints to manage your to-do lists.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Bun](https://bun.sh/).
- MongoDB server up and running.
- Git installed (optional).

## Getting Started

1. Install the dependencies:

   ```bash
   bun install
   ```

2. Create a `.env` file in the project root and set the following environment variables:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/todo-app
   ALLOWED_ORIGINS=http://localhost:3000
   ```

   - `PORT`: Port on which the server will run.
   - `MONGODB_URI`: URI for your MongoDB database.
   - `ALLOWED_ORIGINS`: Origins allowed to make requests to this backend (separated by commas).

3. Start the server:

   ```bash
   bun run start
   ```

4. Your Todo App backend is now running at `http://localhost:3000`.

## API Endpoints

### Todo

- **GET** `/api/todo`: Get all todos.
- **POST** `/api/todo`: Create a new todo.
- **DELETE** `/api/todo/:todoId`: Delete a todo.
