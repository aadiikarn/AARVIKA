import { useCallback, useEffect, useState } from "react";

import "./App.css";

import "./components/Sidebar.css";
import "./components/Topbar.css";
import "./components/EmployeeTable.css";
import "./components/Toast.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";

import { getEmployees } from "./services/employeeService";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [employees, setEmployees] = useState([]);

  const refreshEmployees = useCallback(async () => {
    try {
      const data = await getEmployees();
      setEmployees(data.employees || []);
    } catch (error) {
      console.error("Failed to load employees:", error);
    }
  }, []);

  useEffect(() => {
    refreshEmployees();
  }, [refreshEmployees]);

  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="main-area">
        <Topbar activePage={activePage} />

        <main className="page-content">
          {activePage === "dashboard" ? (
            <Dashboard employees={employees} />
          ) : (
            <Employees
              employees={employees}
              refreshEmployees={refreshEmployees}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;