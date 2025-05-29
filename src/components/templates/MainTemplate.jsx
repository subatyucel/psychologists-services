import { Outlet } from "react-router";
import Navbar from "../organisms/Navbar";
import ToggleMenu from "../organisms/ToggleMenu";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import useEscClose from "../../hooks/useEscClose";
import RegisterLoginModal from "../organisms/RegisterLoginModal";
import LoginForm from "../organisms/LoginForm";
import RegisterForm from "../organisms/RegisterForm";
import { ClipLoader } from "react-spinners";

function MainTemplate() {
  const { isLoginModalOpen, isRegisterModalOpen, isToggleMenuOpen, loading } =
    useSelector((state) => state.ui);
  useEscClose();
  return (
    <>
      <Toaster />
      <header>
        <Navbar />
      </header>
      <main>
        {loading && (
          <div className="flex h-dvh w-dvw items-center justify-center">
            <ClipLoader color="#54be96" size={60} />
          </div>
        )}
        {isLoginModalOpen && (
          <RegisterLoginModal
            title="Log In"
            text="Welcome back! Please enter your credentials to access your account and continue your search for a psychologist."
            form={<LoginForm />}
          />
        )}

        {isRegisterModalOpen && (
          <RegisterLoginModal
            title="Registration"
            text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
            form={<RegisterForm />}
          />
        )}
        {isToggleMenuOpen && <ToggleMenu />}
        {!isToggleMenuOpen && !loading && <Outlet />}
      </main>
    </>
  );
}

export default MainTemplate;
