import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
const AmanCard = () => {
  return (
    <div className="flex bg-red-500 justify-center items-center h-screen">
      <div className="bg-white w-220 h-140 rotate-1 shadow-[15px_15px_0px_#000] hover:scale-103 transition-all duration-300 border-t-black py-5 border-6">
        <div className="flex justify-center flex-col mx-5">
          <div className="border-black relative border-4 w-205 h-80 bg-zinc-300">
            <div className="absolute">
              <div className="bg-amber-300 -top-10 -left-1 absolute w-35 h-14 border-4 border-black">
                <h5 className="font-extrabold text-3xl px-4 py-2">LUFFY</h5>
              </div>
            </div>
            <div className="flex absolute w-fit right-2 bottom-2 justify-end">
              <IoLogoGithub className="size-12 bg-amber-400 border-black border-4 p-2" />
              <FaExternalLinkAlt className="size-12 bg-red-600 text-white border-black border-4 p-2 mx-3" />
            </div>
          </div>
          <div className="border-black border-4 shadow-[6px_6px_0px_#facc15] w-205 h-30 bg-black my-7">
            <h5 className="text-white font-bold text-xl m-5">ddd</h5>
            <div className="flex gap-4 mx-5">
              <p className="text-black bg-white w-17 px-3 font-extrabold">
                React
              </p>
              <p className="text-black bg-white w-17 px-3 font-extrabold">
                Node
              </p>
              <p className="text-black bg-white w-20 px-3 font-extrabold">
                Taiwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmanCard;
