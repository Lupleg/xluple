"use client";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col mt-28 justify-center items-center">
      <div className="w-full items-center flex flex-col mb-4">
        <Image src="/not-found.svg" width={300} height={300} alt="404" />
      </div>
      <div className="items-center ">
        <p className="text-4xl mt-4 text-[#2D1537]">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-2xl mt-2 text-[#2D1537]">
          You may have mistyped the address or the page may have moved.
        </p>
      </div>
      <div className="mt-8">
        <button
          className="mt-4 px-4 py-2 bg-[#2D1537] hover:bg-[#2D1537] text-white rounded-md p-8"
          variant="ghost"
        >
          <Link className=" text-white text-lg" href="/">
            Go Home
          </Link>
        </button>
      </div>
    </div>
  );
}
