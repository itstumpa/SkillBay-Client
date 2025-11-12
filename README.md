# SkillBay 🧑‍💼💻

A full-stack **MERN Freelancing job portal** application where employers can post jobs and candidates can explore and apply for them.  
Built with **MongoDB, Express, React, and Node.js**, this project focuses on clean design, authentication, and user experience.

---

## 🌐 Live Demo  
🔗 **Live Site:** [https://smart-jobs.vercel.app](https://smart-jobs.vercel.app)  
🔗 **Server (API):** [https://smart-jobs-server.vercel.app](https://smart-jobs-server.vercel.app)

---

## 🚀 Tech Stack

**Frontend:** React, React Router, Axios, TailwindCSS, Framer Motion  
**Backend:** Node.js, Express.js, MongoDB, JWT Authentication  
**Hosting:** Vercel (server) & Netlify (Client)
**Database:** MongoDB Atlas  

---

## ✨ Core Features

- 🔐 **User Authentication:** Secure login and registration using JWT and Firebase Auth.  
- 🧾 **Job Management:** Logged-in users can post, edit, or delete their own job listings.  
- 👩‍💻 **Apply Functionality:** Authenticated users can apply to jobs with pre-filled user info (name, email).  
- 🕵️‍♂️ **Dynamic Job Filtering:** Search, sort, and filter jobs by category, date, and location type.  
- 🌙 **Dark / Light Theme Toggle:** Smooth theme switching for better accessibility.  
- 📅 **Real-Time Posted Date:** Jobs display posting date stored in MongoDB.  
- 📸 **Rich UI Experience:** Animated, responsive grid design with Framer Motion and TailwindCSS.  
- 🔒 **Role-Based Control:** Prevents users from applying to their own posted jobs.  

---


## 📦 Dependencies

### 🔹 Frontend
| Package | Description |
|----------|--------------|
| **@heroicons/react** | Beautiful hand-crafted SVG icons for React |
| **@tailwindcss/vite** | TailwindCSS integration with Vite for faster builds |
| **animate.css** | Predefined CSS animations |
| **aos** | Animate On Scroll library for scroll animations |
| **autoprefixer** | Automatically adds vendor prefixes in CSS |
| **axios** | Promise-based HTTP client for API requests |
| **firebase** | Firebase SDK for authentication and hosting |
| **framer-motion** | Animation library for React |
| **lucide-react** | Lightweight icon pack for React |
| **postcss** | Tool for transforming CSS with JS plugins |
| **react** | Core React library |
| **react-dom** | React DOM renderer |
| **react-fast-marquee** | Smooth auto-scrolling marquee component |
| **react-hot-toast** | Beautiful toast notifications for React |
| **react-icons** | Popular icon packs for React (FontAwesome, etc.) |
| **react-router** | Modern routing for React applications |
| **react-toastify** | Flexible notification system |
| **sweetalert2** | Stylish alert & modal popups |
| **swiper** | Touch slider for carousels and hero sections |
| **tailwindcss** | Utility-first CSS framework for styling |

---


### 🔹 Backend
| Package | Description |
|----------|--------------|
| **express** | Web framework for Node.js |
| **cors** | Middleware to handle cross-origin requests |
| **dotenv** | Manage environment variables |
| **jsonwebtoken** | Secure JWT token creation and verification |
| **mongodb** | MongoDB driver for Node.js |
| **nodemon** | Auto-restart server during development |



## ⚙️ Environment Variables

Create a `.env` file in both **client** and **server** folders.


✅ **Note:**  
To install all client dependencies, run:
```bash
npm install