import { Gift } from "lucide-react";
import { ExternalLink } from "lucide-react";
const Card2 = () => {
  return (
    <div className="bg-amber-400 flex items-center justify-center h-screen">
      <div className="bg-blue-950 w-110 h-60 rounded-xl px-8 py-8">
        <Gift className="text-gray-400 size-8" />
        <h1 className="font-extrabold text-white my-2 text-2xl">
          Need a help in Claim?
        </h1>
        <p className="text-gray-400 my-2">
          Go to this step by step guideline process on how to certify for your
          weekly benefits:
        </p>
        <a className="flex items-center gap-2 text-blue-500 font-bold">
          <p> See our guideline</p>
          <ExternalLink className="size-4" />
        </a>
      </div>
    </div>
  );
};

export default Card2;
