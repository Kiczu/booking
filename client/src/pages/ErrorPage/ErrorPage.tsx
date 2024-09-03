import { useRouteError } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  let errorMessage;

  if (error instanceof Response) {
    errorMessage = `Error ${error.status}: ${error.statusText}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = "An unexpected error has occurred.";
  }

  return (
    <>
      <Navigation />
      <main>
        <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{errorMessage}</i>
          </p>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
