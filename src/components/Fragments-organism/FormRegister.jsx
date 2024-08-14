import Button from "../Elements-atom/Button";
import InputForm from "../Elements-atom/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="Insert your fullname"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="Insert your email"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        name="confirmpassword"
      />

      <Button classes="bg-blue-600 text-white w-full">Register</Button>
    </form>
  );
};
export default FormRegister;
