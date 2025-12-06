# FitTracker 🏋️‍♂️

A robust full-stack workout monitoring application designed to help users track their fitness progress. Built using the **MERN Stack** (MongoDB, Express, React, Node.js), this application follows the **MVC architecture** and implements secure authentication practices.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0947dcd1-b307-4b9b-b08d-222c028beacb" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/24c99d53-732c-4d9f-84f2-64100c12ab13" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a40d5228-8520-4de9-864e-248506500d5b" />


## 🚀 Features

* **User Authentication:** Secure Signup and Login functionality using **JWT** (JSON Web Tokens).
* **Workout Logging:** Users can log workout titles, repetition counts, and load (weight) details.
* **Dashboard:** View a history of all logged workouts in a clean interface.
* **Secure Data:** Passwords are hashed and salted using **bcrypt** before storage.
* **State Management:** Utilizes **React Custom Hooks** for modular and reusable logic.

## 🛠️ Tech Stack

**Frontend:**
* React.js
* Context API (for global state management)
* Custom Hooks

**Backend:**
* Node.js
* Express.js
* MongoDB (Mongoose)
* Bcrypt (Security/Hashing)

**Tools:**
* Postman (API Testing)
* Git & GitHub

## 🏗️ Architecture

The backend is built following the **Model-View-Controller (MVC)** design pattern to ensure a clean separation of concerns:

* **Models:** Define the data structure and schema (Mongoose).
* **Controllers:** Handle the business logic for incoming requests (fetching, creating, deleting workouts).
* **Routes:** Map API endpoints to specific controller functions.

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### Prerequisites
* Node.js installed
* MongoDB installed locally or a MongoDB Atlas URI

### 1. Clone the repository
```bash
git clone [https://github.com/yourusername/fittracker.git](https://github.com/yourusername/fittracker.git)
cd fittracker
