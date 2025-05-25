function FormInputWithError({ register, name, error }) {
  return (
    <div>
      <input
        type="text"
        {...register(name)}
        className={`w-full rounded-2xl border border-dark/10 p-4 placeholder:text-dark lg:p-4`}
        placeholder={name[0].toUpperCase() + name.slice(1)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}

export default FormInputWithError;
