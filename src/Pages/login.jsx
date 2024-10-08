import FormLogin from "../components/Fragments-organism/FormLogin";
import AuthLayouts from "../components/Layouts-templates/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" type="login">
      {/* formLogin ini masuk sebagai props children */}
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
