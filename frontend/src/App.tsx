import { Routes, Route } from "react-router-dom";
import PatientList from "./components/PatientList";
import PatientForm from "./components/PatientForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PatientList />} />
      <Route path="/add" element={<PatientForm />} />
    </Routes>
  );
}

export default App;
