AARVIKA — Employee Management System
Simplifying Workforce Management
AARVIKA is a modern full-stack Employee Management System built for managing employee records through a clean, responsive HR dashboard.

The application provides complete CRUD functionality with search, sorting, validation, dashboard statistics, confirmation dialogs, loading/error states and success notifications.

🚀 Features
Employee Dashboard
Add Employee
View Employees
Edit Employee
Delete Employee
Delete Confirmation Modal
Search employees by:
Name
Department
Role
Sort employees by:
Name
Department
Salary
Joining Date
Employee form validation
Loading states
Error handling with retry
Success notifications
Dynamic dashboard statistics
Responsive desktop and mobile UI
MongoDB database persistence
REST API integration
🛠️ Tech Stack
Frontend
React
Vite
Axios
JavaScript
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
CORS
dotenv
📁 Project Structure
AARVIKA/
│
├── backend/
│   ├── controllers/
│   │   └── EmployeeController.js
│   │
│   ├── models/
│   │   └── Employee.js
│   │
│   ├── routes/
│   │   └── employeeRoutes.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    │
    ├── src/
    │   ├── components/
    │   │   ├── Sidebar.jsx
    │   │   ├── Sidebar.css
    │   │   ├── Topbar.jsx
    │   │   ├── Topbar.css
    │   │   ├── StatCard.jsx
    │   │   ├── EmployeeTable.jsx
    │   │   ├── EmployeeTable.css
    │   │   ├── EmployeeForm.jsx
    │   │   ├── DeleteModal.jsx
    │   │   ├── SearchBar.jsx
    │   │   ├── Loading.jsx
    │   │   ├── Toast.jsx
    │   │   └── Toast.css
    │   │
    │   ├── pages/
    │   │   ├── Dashboard.jsx
    │   │   └── Employees.jsx
    │   │
    │   ├── services/
    │   │   └── employeeService.js
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    └── vite.config.js


    
    ⚙️ Installation

1. Clone the repository
git clone <your-repository-url>
2. Open the project
cd AARVIKA
Backend Setup
3. Open backend folder
cd backend
4. Install dependencies
npm install
5. Configure environment variables
Create a .env file inside the backend folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
Replace the MongoDB connection string with your own MongoDB Atlas connection string.
6. Start backend
For normal mode:
npm start
For development mode:
npm run dev
Backend will run on:
http://localhost:5000
Frontend Setup
7. Open a new terminal
From the AARVIKA root folder:
cd frontend
8. Install dependencies
npm install
9. Start frontend
npm run dev
Vite will provide the local development URL, usually:
http://localhost:5173
🔗 REST API
Base URL:
http://localhost:5000/api/employees
Method	Endpoint	Description
POST	/api/employees	Create employee
GET	/api/employees	Get all employees
GET	/api/employees/:id	Get employee by ID
PUT	/api/employees/:id	Update employee
DELETE	/api/employees/:id	Delete employee


👤 Employee Fields
Each employee record contains:
name
department
role
salary
joinDate
Example:
{
  "name": "Rahul Sharma",
  "department": "Engineering",
  "role": "Software Developer",
  "salary": 65000,
  "joinDate": "2026-01-15"
}
📊 Dashboard
The dashboard dynamically displays:
- Total Employees
- Number of Departments
- Average Salary
Statistics are calculated from the employee records stored in MongoDB.
🔍 Employee Management
The Employees page provides:
- Employee search
- Table-based employee listing
- Column sorting
- Add employee form
- Edit employee form
- Delete confirmation
- Success notifications
- Error handling
📱 Responsive Design
AARVIKA is designed to work across:
- Desktop
- Laptop
- Tablet
- Mobile devices
The sidebar automatically adapts for smaller screens.
🧪 API Testing
The REST API can be tested using:
- Postman
- Thunder Client
Tested operations include:
POST
GET
GET BY ID
PUT
DELETE
🏗️ Production Build
To create the frontend production build:
npm run build
The production files are generated inside:
frontend/dist/
🔐 Environment Variables
Never commit the .env file to GitHub.
The project uses:
.env
for sensitive MongoDB connection information.
The .gitignore file includes:
node_modules/
.env
🎯 Project Objective
AARVIKA was developed as a full-stack Employee Management System demonstrating:
- React frontend development
- REST API development
- CRUD operations
- MongoDB database integration
- Mongoose data modeling
- API communication using Axios
- Form validation
- Responsive UI development
- Error and loading state management
👨‍💻 Developer
Aditya Kumar Karan
B.Tech — Computer Science & Engineering
