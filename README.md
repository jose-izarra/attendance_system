# Qwicker Attendance System 🕒

Welcome to the Qwicker Attendance System repository! This project utilizes React for the front-end 🎨 and Azure Functions with a MySQL database for the backend 💾.

## Introduction 🌟
The Attendance System is designed to streamline attendance tracking using a modern web interface powered by React for the front-end. The backend is implemented using Azure Functions, providing scalability and flexibility. The data is stored in a MySQL database to ensure data integrity and reliability.

## Implementation 🛠️

### Front-end (React) 🖌️
React powers our front-end for its efficient, modular interface building capabilities. Its virtual DOM and extensive library ecosystem make it ideal for creating responsive user experiences.

### Back-end (Azure Functions and MySQL) ⚙️
#### Azure Functions ☁️
Azure Functions, our serverless computing choice, enables scalable, event-driven backend architecture. This setup is cost-effective and aligns with our JavaScript proficiency.

#### MySQL Database 🗄️
For our database, we use MySQL for its reliability and performance. It's ACID-compliant and integrates well with Azure Functions, providing a robust backend solution.

## Getting Started 🚀

### Prerequisites 📋
- Node.js and npm installed 💻
- Azure Functions tools installed (`npm install -g azure-functions-core-tools`)
- MySQL server set up 🖥️

### Installation 🔧
1. Clone the repository:
   ```bash
   git clone https://github.com/jose-izarra/attendance_system.git
   cd attendance_system
   ```

2. Install dependencies for the front-end:
   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for the Azure Functions backend:
   ```bash
   cd backend
   npm install
   ```

## Configuration ⚙️
1. Configure the MySQL database connection in the `backend/local.settings.json` file.

   Example:
   ```json
   {
     "IsEncrypted": false,
     "Values": {
       "FUNCTIONS_WORKER_RUNTIME": "node",
       "MYSQL_HOST": "your-mysql-host",
       "MYSQL_USER": "your-mysql-username",
       "MYSQL_PASSWORD": "your-mysql-password",
       "MYSQL_DATABASE": "attendance_system"
     }
   }
   ```

2. Update the front-end configuration in `frontend/src/config.js` if necessary.

## Usage 💡
1. Start the Azure Functions backend:
   ```bash
   cd backend
   npm start
   ```

2. Start the React front-end:
   ```bash
   cd frontend
   npm start
   ```

Visit [http://localhost:3000](http://localhost:3000) in your browser to use the Attendance System.

## Contributors 👥
![Contributors](https://contrib.rocks/image?repo=jose-izarra/attendance_system)

