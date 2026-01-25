import appleimg from "../assets/apple-watch.png";
import { FaShoppingCart } from "react-icons/fa";
const Card8 = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-110 h-120 rounded-xl bg-slate-900">
        <img src={appleimg} alt="apple-watch" className="w-90 mx-auto my-5" />
        <div className="mx-10 justify-center my-3 gap-4 flex items-center">
          <p className="text-amber-300">★★★★★</p>
          <p className="bg-blue-950 rounded w-30 text-center text-blue-300">
            4.8 out of 5
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-white my-4 font-bold text-xl">
            Apple Watch Series 7 GPS, <br /> Aluminium Case, Starlight
          </p>
        </div>

        <div className="flex items-center justify-between px-10">
          <p className="text-white font-bold text-2xl">$599</p>
          <button className="bg-blue-600 rounded-lg py-2 w-30 p-1 text-white">
            <div className="flex items-center text-sm justify-center gap-2">
              <FaShoppingCart />
              Add to cart
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card8;
