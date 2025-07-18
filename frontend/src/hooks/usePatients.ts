import { useEffect, useState } from "react";
import type { Patient } from "../types/Patient";

export const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8000/api/patients");
        const data = await res.json();
        setPatients(data);
      } catch (err) {
        setError("Error loading patients. " + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  return { patients, loading, error };
};
