import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className=" text-5xl">oops !!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'}>
      <button className="btn btn-error text-white mt-5 px-10 ">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
