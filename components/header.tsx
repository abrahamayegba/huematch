import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-16 w-screen px-8 md:h-24">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between">
        <Link
          href={"/"}
          className="hidden bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-[22px] font-bold text-transparent sm:block"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient-animation 5s ease-in-out infinite",
          }}
        >
          Huematch
        </Link>
      </div>
    </header>
  );
};

export default Header;
