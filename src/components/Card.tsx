import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white  shadow rounded-lg">{children}</div>
      </div>
    </div>
  );
}

export default Card;
