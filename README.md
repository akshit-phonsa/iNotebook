# iNotebook - Your Notebook on the Cloud ☁️

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to create, manage, and store their notes securely in the cloud. Built with modern web technologies and featuring user authentication, this application provides a seamless note-taking experience.

## 🌐 Live Demo

Check out the live application: [https://i-notebook-ivory.vercel.app/](https://i-notebook-ivory.vercel.app/)

## 🚀 Features

- **User Authentication**: Secure signup and login functionality with JWT tokens
- **Create Notes**: Add new notes with title, description, and tags
- **Edit Notes**: Update existing notes easily
- **Delete Notes**: Remove notes you no longer need
- **Cloud Storage**: All notes are stored securely in MongoDB Atlas
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Email Integration**: Email functionality using EmailJS
- **Context API**: Efficient state management using React Context

## 🛠️ Tech Stack

### Frontend
- **React** (v18.2.0) - UI library
- **React Router DOM** (v6.10.0) - Client-side routing
- **EmailJS Browser** (v3.10.0) - Email integration
- **Bootstrap** - Styling (via CDN)

### Backend
- **Node.js** - Runtime environment
- **Express.js** (v4.18.2) - Web framework
- **MongoDB** (v6.13.0) - Database
- **Mongoose** (v6.10.4) - ODM for MongoDB
- **JWT** (jsonwebtoken v8.5.1) - Authentication
- **bcryptjs** (v2.4.3) - Password hashing
- **express-validator** (v6.15.0) - Input validation
- **CORS** (v2.8.5) - Cross-origin resource sharing

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB installation)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akshit-phonsa/iNotebook.git
   cd iNotebook
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the `backend` directory with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=4000
   CORS_ORIGINS=http://localhost:3000
   ```

## 🚀 Running the Application

### Option 1: Run Frontend and Backend Separately

**Terminal 1 - Frontend:**
```bash
npm start
```
The React app will run on [http://localhost:3000](http://localhost:3000)

**Terminal 2 - Backend:**
```bash
cd backend
npm start
```
The backend server will run on [http://localhost:4000](http://localhost:4000)

### Option 2: Run Both Concurrently

```bash
npm run both
```
This will start both the frontend and backend servers simultaneously.

## 📁 Project Structure

```
iNotebook/
├── backend/
│   ├── middleware/      # Custom middleware (auth, etc.)
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes (auth, notes)
│   ├── .env            # Environment variables
│   ├── db.js           # Database connection
│   ├── index.js        # Backend entry point
│   └── package.json    # Backend dependencies
├── public/             # Static files
├── src/
│   ├── components/     # React components
│   │   ├── About.js
│   │   ├── AddNote.js
│   │   ├── Alert.js
│   │   ├── EmailSend.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   ├── Noteitem.js
│   │   ├── Notes.js
│   │   └── SignUp.js
│   ├── context/        # React Context for state management
│   │   └── notes/
│   ├── App.js          # Main App component
│   └── index.js        # Frontend entry point
├── package.json        # Frontend dependencies
└── README.md          # Project documentation
```

## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /api/auth/createuser` - Register a new user
- `POST /api/auth/login` - Login user

### Notes Routes (`/api/notes`)
- `GET /api/notes/fetchallnotes` - Get all notes (requires auth)
- `POST /api/notes/addnote` - Create a new note (requires auth)
- `PUT /api/notes/updatenote/:id` - Update a note (requires auth)
- `DELETE /api/notes/deletenote/:id` - Delete a note (requires auth)

## 🔒 Security Features

- Password hashing using bcryptjs
- JWT-based authentication
- Protected API routes with middleware
- Input validation using express-validator
- CORS configuration for secure cross-origin requests

## 📝 Available Scripts

- `npm start` - Run the React development server
- `npm run build` - Build the app for production
- `npm test` - Run tests
- `npm run both` - Run both frontend and backend concurrently

## 🌐 Deployment

The application can be deployed to:
- **Frontend**: Vercel, Netlify, or any static hosting service
- **Backend**: Heroku, Railway, Render, or any Node.js hosting platform

Make sure to update the CORS origins and MongoDB connection string for production.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Akshit Phonsa**
- GitHub: [@akshit-phonsa](https://github.com/akshit-phonsa)

## 🙏 Acknowledgments

- Built with Create React App
- MongoDB Atlas for cloud database
- EmailJS for email functionality
