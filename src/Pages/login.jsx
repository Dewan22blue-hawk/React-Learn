import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments-organism/FormLogin";
import AuthLayouts from "../components/Layouts-templates/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      {/* formLogin ini masuk sebagai props children */}
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        Don't have an account?
        <Link className="font-bold text-blue-600" to="/register">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
