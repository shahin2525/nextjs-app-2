"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <p className="text-center text-4xl text-red-400">something went wrong</p>
      <p className="text-center text-4xl text-red-400">{error.message}</p>
      <button onClick={() => reset()}>try again</button>
    </div>
  );
};

export default ErrorPage;
