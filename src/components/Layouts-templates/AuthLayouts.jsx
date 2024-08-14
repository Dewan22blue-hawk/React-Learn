import { Link } from "react-router-dom";
import FormLogin from "../Fragments-organism/FormLogin";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="mx-2 flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2  text-blue-600">{title}</h1>
        <p className="font-medium-text-slate-700 mb-8">
          Welcome ! please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {/* gunakan ternary operator jika hanya 2 kondisi */}
          {type === "login"
            ? "Don't have an account? "
            : "Already Have an account? Please"}{" "}
          {/* gunakan and operator jika kondisi lebih dari 2 jadi render satu-satu */}
          {type === "login" && (
            <Link className="font-bold text-blue-600" to="/register">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link className="font-bold text-blue-600" to="/login">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
