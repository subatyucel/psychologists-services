import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/yupSchema";
import FormInputWithError from "../molecules/FormInputWithError";
import PasswordInput from "../molecules/PasswordInput";
import PillButton from "../atoms/PillButton";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Veri", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4.5"
    >
      <FormInputWithError
        register={register}
        name="email"
        error={errors.email}
      />

      <div>
        <PasswordInput register={register} />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {isSubmitting ? null : <PillButton className="py-4"> Sign Up</PillButton>}
    </form>
  );
}

export default LoginForm;
