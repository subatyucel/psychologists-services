import { Link } from "react-router";

function NotFoundPage() {
  return (
    <main className="flex h-dvh flex-col p-4 text-center text-sm font-medium text-soft md:text-xl lg:p-24">
      <div className="my-auto">
        <h1 className="text-xl font-extrabold text-dark md:text-3xl">
          Oopss, page not found!
        </h1>
        <p> This page may have gone to therapy... </p>
        <p>
          But we can direct you to the{" "}
          <Link to="/" className="text-primary-200 underline">
            right place.
          </Link>
        </p>

        <img className="" src="/notFound.svg" alt="Therapist and patient" />
      </div>
    </main>
  );
}

export default NotFoundPage;
