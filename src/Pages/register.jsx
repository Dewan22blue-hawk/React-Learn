import FormLogin from "../components/Fragments-organism/FormLogin";
import FormRegister from "../components/Fragments-organism/FormRegister";
import AuthLayouts from "../components/Layouts-templates/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      {/* formLogin ini masuk sebagai props children */}
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
