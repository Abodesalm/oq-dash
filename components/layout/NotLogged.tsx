import Link from "next/link";

function NotLogged() {
  return (
    <div className="w-full h-[70vh] flex-center flex-col">
      <h1 className="text-size-1">You are not logged in!</h1>
      <div>
        <p>for sign up :</p>
        <Link
          href={`/auth/signup`}
          className="text-accent underline decoration-accent"
        >
          Link
        </Link>
      </div>
      <div>
        <p>for login :</p>
        <Link
          href={`/auth/login`}
          className="text-accent underline decoration-accent"
        >
          Link
        </Link>
      </div>
    </div>
  );
}

export default NotLogged;
