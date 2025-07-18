import Button from "./Button";

type ModalProps = {
  message: string;
  onClose: () => void;
};

const Modal = ({ message, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 animate-fade-in">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm text-center space-y-4 animate-slide-up">
        <p>{message}</p>
        <Button onClick={onClose} variant="primary">
          OK
        </Button>
      </div>
    </div>
  );
};
export default Modal;
