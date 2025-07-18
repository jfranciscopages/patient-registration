import { Routes, Route } from "react-router-dom";
import PatientList from "./components/PatientList";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PatientList />} />
      <Route path="/add" element={<RegisterForm />} />
    </Routes>
  );
}

export default App;
