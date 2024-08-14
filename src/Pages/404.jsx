import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      id="error-page"
      className="mx-2 flex justify-center min-h-screen items-center flex-col"
    >
      <h1 className="text-3xl font-bold mb-2">Oops!</h1>
      <p className="font-medium-text-slate-700 mb-8">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="font-medium text-slate-700 mb-8">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
export default ErrorPage;
