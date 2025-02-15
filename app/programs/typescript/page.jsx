import TsCard from "./ts-card";
import MoreFQA from "@/components/FeaturesCards/MoreFAQ";

export default function TypeScript() {
  return (
    <div>
      <div className="min-h-screen text-[#2D1537] bg-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <img
              src="/ts.webp"
              alt="Glowing potion bottle"
              className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
              width={80}
              height={80}
            />
            <h1 className="text-3xl text-black sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Free TypeScript Tutorials
            </h1>
            <p className="text-black text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto px-4">
              A collection of free, exercise-driven, in-depth TypeScript
              tutorials for you to use on your journey to TypeScript wizardry.
            </p>
          </div>

          <TsCard />
        </div>
      </div>
      <MoreFQA />
    </div>
  );
}
