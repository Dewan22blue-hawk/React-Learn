import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments-organism/FormLogin";
import FormRegister from "../components/Fragments-organism/FormRegister";
import AuthLayouts from "../components/Layouts-templates/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      {/* formLogin ini masuk sebagai props children */}
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        Have an account?
        <Link className="font-bold text-blue-600" to="/login">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
