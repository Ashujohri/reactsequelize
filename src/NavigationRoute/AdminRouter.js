import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import TeacherList from "../components/Teacher/TeacherList";

export default function AdminRouter(props) {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Dashboard />} path="/Dashboard" />
        <Route element={<TeacherList />} path="/TeacherList" />
      </Routes>
    </Router>
  );
}
