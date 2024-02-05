
# Qwicker Attendance System

Welcome to the Qwicker Attendance System repository! This project utilizes React for the front-end and Azure Functions with a MySQL database for the backend.

## Table of Contents
- [Introduction](#introduction)
- [Implementation](#implementation)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Attendance System is designed to streamline attendance tracking using a modern web interface powered by React for the front-end. The backend is implemented using Azure Functions, providing scalability and flexibility. The data is stored in a MySQL database to ensure data integrity and reliability.

## Implementation

### Front-end (React)
We chose React for the front-end due to its declarative and component-based nature, making it easy to build interactive and modular user interfaces. React's virtual DOM enables efficient updates, enhancing the performance of the application. Additionally, the vast ecosystem of React libraries and strong community support played a significant role in the decision.

### Back-end (Azure Functions and MySQL)
#### Azure Functions
Azure Functions provide a serverless computing platform, allowing us to focus on writing code without managing the infrastructure. The event-driven architecture of Azure Functions suits the intermittent nature of attendance tracking. It enables automatic scaling, reducing costs during periods of low demand. The ability to write functions in Node.js also aligns with our familiarity with JavaScript.

#### MySQL Database
We opted for MySQL as the backend database for its reliability, performance, and widespread adoption. MySQL's ACID compliance ensures data consistency, and its support for relational data models suits the structured nature of attendance records. Additionally, Azure Functions seamlessly integrate with MySQL, providing a robust and scalable backend infrastructure.

## Getting Started

### Prerequisites
- Node.js and npm installed
- Azure Functions tools installed (`npm install -g azure-functions-core-tools`)
- MySQL server set up

### Installation
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

## Configuration
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

## Usage
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

## Contributors
![Contributors](https://contrib.rocks/image?repo=jose-izarra/attendance_system)

