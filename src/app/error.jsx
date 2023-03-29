"use client";
export default function error({ error, reset }) {
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button
        className="hover:text-amber-600"
        onClick={() => {
          reset();
        }}
      >
        try again
      </button>
    </div>
  );
}
