import laptop from "../assets/image-1.jpg";
const Card4 = () => {
  return (
    <div className="flex bg-black items-center justify-center h-screen">
      <div className="w-110 h-125 bg-slate-900 rounded">
        <div className="w-90 mx-auto my-5">
          <img
            src={laptop}
            className="max-w-full h-auto rounded-xl object-cover"
            alt="setup-img"
          />
        </div>

          <h1 className="text-white mx-10 font-bold text-2xl">Streamlining your design process today.</h1>
          <p className="text-gray-400 mx-10 my-2">
            In today’s fast-paced digital landscape, fostering seamless
            collaboration among Developers and IT Operations.
          </p>
          <button className="bg-slate-800 mx-10 my-2 text-slate-400 rounded-xl w-30 h-11 p-1">
            Read more →
          </button>
      </div>
    </div>
  );
};

export default Card4;
