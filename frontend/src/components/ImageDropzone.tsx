import { useDropzone } from "react-dropzone";

const ImageDropzone = ({
  onDrop,
  error,
  value,
}: {
  onDrop: (files: File[]) => void;
  error?: string;
  value?: File[];
}) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    accept: { "image/jpeg": [".jpg"] },
    multiple: false,
    onDrop,
  });

  return (
    <div>
      <label className="block text-sm font-medium pb-2">
        Document Photo (.jpg)
      </label>
      <div
        {...getRootProps()}
        className={`flex items-center justify-center h-28 px-4 border-2 border-dashed rounded-md cursor-pointer transition-colors ${
          error
            ? "border-red-500 bg-red-50"
            : isDragActive
            ? "border-black-500 bg-black-50"
            : "border-gray-300 hover:border-black hover:bg-gray-50"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-sm text-gray-500">
          {value?.[0] ? value[0].name : "Drag and drop or click to upload"}
        </p>
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default ImageDropzone;
