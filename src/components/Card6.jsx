import Card6img from "../assets/card6-img.jpg";
import { Ellipsis } from "lucide-react";
import { UserPlus } from "lucide-react";
const Card6 = () => {
  return (
    <div className="flex justify-center bg-black items-center h-screen">
      <div className="bg-slate-900 w-100 h-85 rounded-2xl">
        <div className="relative">
          <Ellipsis className="text-slate-400 absolute right-7 top-5 hover:bg-slate-700 hover:w-6 hover:p-1 hover:rounded-xl" />
        </div>
        <img
          src={Card6img}
          alt="good looking gal"
          className="rounded-full mx-auto my-5"
        />
        <h1 className="text-white px-30 text-2xl">Bonnie Green</h1>
        <p className="text-slate-400 px-36 my-1">Visual Disgner</p>
        <div className="flex gap-5 items-center justify-center">
          <button className="flex justify-center items-center gap-2  my-6 bg-blue-600 text-white rounded-xl w-35 h-11 p-1">
            <UserPlus />
            follow me
          </button>

          <button className="flex justify-center items-center gap-2 my-6 bg-slate-700 text-slate-400 rounded-xl w-28 h-11 p-1">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card6;

