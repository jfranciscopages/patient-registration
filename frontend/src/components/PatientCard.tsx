import type { Patient } from "../types/Patient";

const PatientCard = ({
  patient,
  expanded,
  onToggle,
}: {
  patient: Patient;
  expanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="w-full max-w-sm p-4 rounded-lg shadow border bg-white space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-32 h-32 rounded overflow-hidden bg-gray-200 flex items-center justify-center text-xl font-semibold text-white bg-blue-500">
            {patient.document_photo ? (
              <img
                src={`http://localhost:8000/storage/${patient.document_photo}`}
                alt={patient.full_name}
                className="object-cover w-full h-full"
              />
            ) : (
              patient.full_name[0]
            )}
          </div>
          <span className="text-xl font-medium">{patient.full_name}</span>
        </div>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={
            expanded ? "Hide patient details" : "Show patient details"
          }
          className="w-8 h-8 rounded-full hover:bg-gray-100"
        >
          ⋯
        </button>
      </div>

      {expanded && (
        <div className="mt-2 border-t pt-2 text-sm text-gray-700 space-y-1">
          <p>
            <strong>Email:</strong> {patient.email}
          </p>
          <p>
            <strong>Phone:</strong> {patient.phone_country_code}{" "}
            {patient.phone_number}
          </p>
        </div>
      )}
    </div>
  );
};

export default PatientCard;
