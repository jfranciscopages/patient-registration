import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PatientCard from "./PatientCard";
import Button from "./Button";
import { usePatients } from "../hooks/usePatients";

const PatientList = () => {
  const { patients, loading, error } = usePatients();
  const [expandedPatientId, setExpandedPatientId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (id: number) => {
    setExpandedPatientId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setExpandedPatientId(null);
      }
    };

    if (expandedPatientId !== null) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [expandedPatientId]);

  return (
    <div className="p-6 max-w-6xl mx-auto" ref={containerRef}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Patients</h2>
        <Link to="/add">
          <Button type="button" variant="primary">
            Add Patient
          </Button>
        </Link>
      </div>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-48 w-full bg-gray-200 animate-pulse rounded"
            />
          ))}
        </div>
      )}

      {error && <p className="text-red-500 text-center mt-10">{error}</p>}

      {!loading && patients.length === 0 && (
        <p className="text-center mt-10 text-gray-600">No patients found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            expanded={expandedPatientId === patient.id}
            onToggle={() => toggleExpand(patient.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
