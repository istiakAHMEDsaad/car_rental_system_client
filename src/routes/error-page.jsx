import { Link, useRouteError } from "react-router-dom";
import errorGif from "../assets/404.gif";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-screen">
      <div className="h-screen flex items-center justify-center">
        <div className="flex md:flex-row flex-col items-center justify-center md:justify-between lg:px-10 md:px-5">
          <div className="flex-1">
            <p className="lg:text-4xl md:text-3xl text-2xl mb-2">
              404 Page not found
            </p>
            <Link className="btn btn-neutral" to={"/"}>Go Home</Link>
          </div>
          <div className="flex-2">
            <img src={errorGif} alt="404 error gif" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
<p>
        <i>{error.statusText || error.message}</i>
      </p>
*/
