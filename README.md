# 🎟️ Ticket Management App

A simple **React-based ticket management system** that allows users to **sign up, log in, and manage support tickets** — all stored locally using browser `localStorage`. Built as part of the **HNG Frontend Internship (Stage 2)** task.

---

## 🚀 Features

✅ **User Authentication**

* Sign up and log in using localStorage
* Session-based access control
* Auto session validation on reload

✅ **Ticket CRUD Operations**

* Create, Read, Update, Delete tickets
* Each ticket includes a title, description, and status
* Real-time updates saved locally

✅ **Protected Dashboard**

* Only accessible after login
* Redirects unauthorized users automatically

✅ **Responsive UI**

* Works seamlessly on desktop and mobile
* Styled with clean, modern CSS

✅ **Session Management**

* Tracks login time
* Session expires after inactivity

---

## 🧩 Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── ProtectedRoute.js
│
├── pages/
│   ├── Landing.js
│   ├── Login.js
│   ├── Signup.js
│   ├── Dashboard.js
│   └── Tickets.js
│
├── App.js
└── index.js
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Rayflix55/Ticket_Management_App.git
   cd Ticket_Management_App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the app**

   ```bash
   npm start
   ```

4. **Open in your browser**

   ```
   http://localhost:3000
   ```

---

## 🧠 How It Works

**Authentication Flow**

1. User signs up → Data saved to localStorage
2. User logs in → Session created (`ticketapp_session`)
3. Protected routes check for valid session before rendering
4. Logging out removes the session and redirects to login

**Tickets Flow**

* Users can add, edit, and delete tickets directly from the dashboard
* All ticket data is saved in localStorage (`tickets`)
* Status options: *Open*, *In Progress*, *Closed*

---

## 🧑‍💻 Tech Stack

* **React.js** (Frontend)
* **React Router DOM** (Routing)
* **LocalStorage API** (Data Persistence)
* **CSS3 / Flexbox** (Styling)

---

## 📸 Screenshots

| Landing Page                          | Dashboard                                 | Tickets                               |
| ------------------------------------- | ----------------------------------------- | ------------------------------------- |
| ![Landing](./screenshots/landing.png) | ![Dashboard](./screenshots/dashboard.png) | ![Tickets](./screenshots/tickets.png) |

*(Add your screenshots to a `/screenshots` folder to display them here.)*

---

## ✨ Future Improvements

* Integrate with a backend (Node.js / Firebase)
* Role-based user access
* Ticket filters and search
* Password encryption
* Dark mode UI

---

## 🏁 Project Info

**Author:** [Samuel Raymond (Rayflix)](https://github.com/Rayflix55)
**Track:** HNG Frontend Internship — Stage 2
**Live Demo:** [Ticket Management App](https://rayflix-ticket.vercel.app) *(add link when deployed)*
**Repository:** [GitHub](https://github.com/Rayflix55/Ticket_Management_App)

---
