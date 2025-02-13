import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import SlotManagement from "./components/SlotManagement";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CalendarView from "./components/Calendar";

function App() {
  const [user, setUser] = useState({ username: "defaultUser", timezone: "UTC" });
  const [slots, setSlots] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
    document.documentElement.classList.toggle("dark", newMode); 
  };
  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => setSlots(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode); 
  }, [darkMode]);

  return (
    <Router>
      <div
        className={`min-h-screen ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={<Dashboard slots={slots} user={user} />}
            />
            <Route
              path="/profile"
              element={<UserProfile user={user} setUser={setUser} />}
            />
            <Route
              path="/slots"
              element={
                <SlotManagement
                  slots={slots}
                  setSlots={setSlots}
                  user={user}
                />
              }
            />
            <Route
              path="/calendar"
              element={<CalendarView slots={slots} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;