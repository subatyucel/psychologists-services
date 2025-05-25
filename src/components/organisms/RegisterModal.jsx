import Modal from "./Modal";
import RegisterForm from "./RegisterForm";

function RegisterModal() {
  return (
    <Modal>
      <div className="flex flex-col gap-5">
        <h1 className="text-left text-4xl font-medium">Registration</h1>
        <p className="text-dark/50">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>

      <RegisterForm />
    </Modal>
  );
}

export default RegisterModal;
