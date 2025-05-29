import ModalLayer from "../molecules/ModalLayer";

function RegisterLoginModal({ title, text, form }) {
  return (
    <ModalLayer>
      <div className="flex flex-col gap-5">
        <h1 className="text-left text-4xl font-medium">{title}</h1>
        <p className="text-dark/50">{text}</p>
      </div>

      {form}
    </ModalLayer>
  );
}

export default RegisterLoginModal;
