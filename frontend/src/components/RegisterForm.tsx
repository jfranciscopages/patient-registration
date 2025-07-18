import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@/components/Button";
import FormField from "./FormField";
import ImageDropzone from "./ImageDropzone";

type FormInputs = {
  fullName: string;
  email: string;
  phoneCountryCode: string;
  phoneNumber: string;
  documentPhoto: File[];
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormInputs>({ mode: "onSubmit" });

  const navigate = useNavigate();
  const documentPhoto = watch("documentPhoto");

  const [message, setMessage] = useState("");

  const MAX_FILE_SIZE_MB = 1;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const onSubmit = async (data: FormInputs) => {
    const file = data.documentPhoto?.[0];
    if (!file) {
      setError("documentPhoto", {
        type: "manual",
        message: "Document photo is required",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError("documentPhoto", {
        type: "manual",
        message: `Image is too large. Max ${MAX_FILE_SIZE_MB} MB allowed.`,
      });
      return;
    }

    const formData = new FormData();
    formData.append("full_name", data.fullName);
    formData.append("email", data.email);
    formData.append("phone_country_code", data.phoneCountryCode);
    formData.append("phone_number", data.phoneNumber);
    formData.append("document_photo", file);

    try {
      const response = await fetch("http://localhost:8000/api/patients", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          for (const field in result.errors) {
            setError(field as keyof FormInputs, {
              type: "manual",
              message: result.errors[field][0],
            });
          }
        }
        setMessage("Error registering patient.");
        return;
      }

      setMessage("Patient successfully registered.");
      reset();
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setMessage("Server error: " + (err as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-center">Register Patient</h2>

        <FormField
          label="Full Name"
          error={errors.fullName}
          placeholder="Full Name"
          {...register("fullName", {
            required: "Full name is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Only letters and spaces allowed",
            },
          })}
        />

        <FormField
          label="Email"
          error={errors.email}
          placeholder="example@gmail.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              message: "Only @gmail.com emails allowed",
            },
          })}
        />
        <FormField
          label="Country Code"
          error={errors.phoneCountryCode}
          placeholder="+54"
          {...register("phoneCountryCode", {
            required: "Country code is required",
            maxLength: { value: 5, message: "Too long" },
          })}
        />

        <FormField
          label="Phone Number"
          error={errors.phoneNumber}
          placeholder="1234567890"
          {...register("phoneNumber", {
            required: "Phone number is required",
            maxLength: { value: 15, message: "Too long" },
          })}
        />

        <ImageDropzone
          value={documentPhoto}
          error={errors.documentPhoto?.message}
          onDrop={(files) => {
            const file = files[0];
            if (!file) return;

            if (file.size > MAX_FILE_SIZE_BYTES) {
              setError("documentPhoto", {
                type: "manual",
                message: `Image too large. Max ${MAX_FILE_SIZE_MB} MB allowed.`,
              });
            } else {
              clearErrors("documentPhoto");
              reset({ ...watch(), documentPhoto: [file] });
            }
          }}
        />

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={isSubmitting}
          variant="primary"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>

        <Button
          type="button"
          className="w-full cursor-pointer"
          onClick={() => navigate("/")}
        >
          Back to Patients
        </Button>

        {message && (
          <p className="mt-2 text-center text-sm font-medium">{message}</p>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
