import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/yupSchema";
import PillButton from "../atoms/PillButton";
import PasswordInput from "../molecules/PasswordInput";
import FormInputWithError from "../molecules/FormInputWithError";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log("Veri", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4.5"
    >
      <FormInputWithError register={register} name="name" error={errors.name} />

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

export default RegisterForm;
