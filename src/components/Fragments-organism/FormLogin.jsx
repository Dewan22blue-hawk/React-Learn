import Button from "../Elements-atom/Button";
import InputForm from "../Elements-atom/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />

      <Button classes="bg-blue-600 text-white w-full" children="Login"></Button>
    </form>
  );
};
export default FormLogin;
