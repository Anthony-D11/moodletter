# Email Newsletter Builder

## Overview

The **Email Newsletter Builder** is a web application that allows users to create, manage, and send email newsletters. Built with **React** for the frontend and **Express** with a **MongoDB** database for the backend, this app provides a user-friendly interface to build newsletters, manage subscriber lists, and handle email operations securely. Key features include a dynamic email list with remove functionality, a confirmation modal, and environment-based configuration.

## Features

- **Newsletter Creation**: Design and preview newsletters with customizable templates.
- **Subscriber Management**: Add, view, and remove email subscribers with a confirmation modal for deletions.
- **MongoDB Backend**: Store subscriber emails and newsletter data in a MongoDB database.
- **RESTful API**: Backend API for managing subscribers and newsletters.
- **Environment Variables**: Configure API endpoints and database connections using `.env` files.
- **Responsive Design**: Mobile-friendly UI built with React and styled with Bootstrap.

## Tech Stack

- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other Libraries**:
  - `axios` for API requests
  - `dotenv` for environment variable management
  - `cors` for cross-origin requests
  - `mongoose` for MongoDB object modeling

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local instance or MongoDB Atlas)
- **Git**

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Anthony-D11/moodletter.git
cd moodletter
```

### 2. Set Up the Backend

1. Navigate to the backend directory:

   ```bash
   cd server
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Add environment variables for the following:

   ```
   FRONTEND_URL=http://localhost:3000
   MONGODB_PASSWORD=mongodb_password
   MONGODB_USERNAME=mongodb_username
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:4000`.

### 3. Set Up the Frontend

1. Navigate to the frontend directory (e.g., `/client`):

   ```bash
   cd client
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### 4. Database Setup

1. Ensure you have a valid pair of username and password
2. The database (`newsletter_db`) will be created automatically when the first document is inserted.

### 5. Approach

My approach was to start with researching how an email newsletter builder website looks like. I decided to have a homepage which leads user to create a new newsletter. For time constraint, I only allow users to modify texts on a predefined newsletter but minimal customization to the templates. I decided to choose MongoDB as newsletter templates are dynamic so a NoSQL database should be suitable in this case. I also chosed Bootstrap to quickly style my website.

### 6. AI Prompts used

- How do I start with this project (helps me better plan the path for the project)
- How do you think the web app will look like? (helps me better visualize the project)
- Write me a readme for a email newsletter builder website built in React, backed by a mongodb database (Help me get started with a template for a generic website)
