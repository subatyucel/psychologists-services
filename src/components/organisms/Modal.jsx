import SvgIcon from "../atoms/SvgIcon";

function Modal({ children }) {
  return (
    <div className="absolute top-0 left-0 flex h-dvh w-dvw flex-col items-center justify-center bg-dark/60">
      <div className="relative flex max-w-lg flex-col justify-center gap-10 bg-light p-12">
        <SvgIcon icon="x" className="absolute top-7 right-7 size-4" />
        {children}
      </div>
    </div>
  );
}

export default Modal;
