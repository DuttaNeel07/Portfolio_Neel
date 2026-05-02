# Neel Dutta Portfolio

A personal full-stack portfolio website built with React, Vite, Node.js, Express, and MongoDB. The frontend presents portfolio information, projects, skills, and a contact form. The backend provides API endpoints for fetching projects and saving contact messages.

## Features

- Single-page React frontend
- Client-side routing with React Router
- Responsive portfolio layout
- Dynamic projects page with backend fetching
- Fallback project data when the backend is unavailable
- Contact form with backend submission
- Express API with MongoDB models
- Clean component-based frontend structure

## Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## Project Structure

```txt
Portfolio_Neel/
  Frontend/
    my-react-app/
      src/
        components/
          Navbar.jsx
          Footer.jsx
          ProjectCard.jsx
          SkillBadge.jsx
        pages/
          HomePage.jsx
          ProjectsPage.jsx
          ContactPage.jsx
        App.jsx
        main.jsx
        index.css
      package.json
      vite.config.js

  backend/
    config/
      db.js
    controllers/
      contactControllers.js
      projectControllers.js
    models/
      Contact.js
      Projects.js
    routes/
      contactRoutes.js
      projectRoutes.js
    server.js
    package.json
```

## Frontend Overview

The frontend is a Vite React app. `main.jsx` renders the root `App` component. `App.jsx` sets up routing and keeps shared layout components such as the navbar and footer visible across pages.

Main routes:

```txt
/          Home page
/projects  Projects page
/contact   Contact page
```

Important frontend concepts used:

- Functional components
- Props
- `useState`
- `useEffect`
- Controlled forms
- Conditional rendering
- List rendering with `.map()`
- Environment variables
- API calls using `fetch`

## Backend Overview

The backend is an Express server connected to MongoDB using Mongoose.

API routes:

```txt
GET  /project   Fetch all projects
POST /contact   Save a contact message
```

The backend starts from:

```txt
backend/server.js
```

## Getting Started

### Prerequisites

Make sure you have these installed:

- Node.js
- npm
- MongoDB connection string

## Installation

Clone the repository:

```bash
git clone https://github.com/DuttaNeel07/Portfolio_Neel.git
cd Portfolio_Neel
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../Frontend/my-react-app
npm install
```

## Environment Variables

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=10000
```

Create a `.env` file inside `Frontend/my-react-app`:

```env
VITE_API_URL=http://localhost:10000
```

## Running The Project

Start the backend:

```bash
cd backend
npm start
```

Start the frontend:

```bash
cd Frontend/my-react-app
npm run dev
```

The frontend will usually run at:

```txt
http://localhost:5173
```

The backend will run at:

```txt
http://localhost:10000
```

## Build Frontend

To create a production build:

```bash
cd Frontend/my-react-app
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## API Endpoints

### Get Projects

```http
GET /project
```

Returns all projects stored in MongoDB.

### Submit Contact Message

```http
POST /contact
```

Request body:

```json
{
  "name": "Your Name",
  "message": "Your message"
}
```

If `name` is not provided, the backend stores it as `Anonymous`.

## Interview Summary

This project is a full-stack portfolio application. The frontend is built using React and Vite, with React Router handling navigation between pages. Reusable components such as `Navbar`, `Footer`, `ProjectCard`, and `SkillBadge` keep the UI modular. The Projects page uses `useEffect` to fetch project data from the backend, while the Contact page uses controlled form inputs and sends a POST request to the backend. The backend is built with Express and MongoDB, providing routes for project data and contact form submissions.

## Author

Neel Dutta

- GitHub: [DuttaNeel07](https://github.com/DuttaNeel07)
- LinkedIn: [engineel](https://www.linkedin.com/in/engineel)
- Email: neel.dutta0729@gmail.com
