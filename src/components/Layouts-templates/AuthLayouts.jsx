import FormLogin from "../Fragments-organism/FormLogin";

const AuthLayouts = (props) => {
  const { children, title } = props;
  return (
    <div className="mx-2 flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2  text-blue-600">{title}</h1>
        <p className="font-medium-text-slate-700 mb-8">
          Welcome ! please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
