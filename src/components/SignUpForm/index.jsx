import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name <input {...register("name", { required: true })} />
      </label>
      <br />
      <label>
        Age <input {...register("age", { required: true })} />
      </label>
      <br />
      <label>
        Address <input {...register("address", { required: true })} />
      </label>
      <br />
      <label>
        ZipCode <input {...register("zipcode", { required: true })} />
      </label>
      <br />
      <label>
        Phone <input {...register("phone", { required: true })} />
      </label>
      <br />
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear Form
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SignUpForm;
