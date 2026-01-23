import laptop from "../assets/image-4.jpg";
const Card5 = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex bg-slate-900 w-150 h-80 rounded-xl">
        {/* <div className="w-50 m-7"> */}
        <img src={laptop} alt="cool laptop" className="w-50 m-7 rounded-2xl" />
        {/* </div> */}

        <div className="my-9">
          <h1 className="text-white font-bold text-2xl">
            Streamlining your design process today.
          </h1>
          <p className="text-slate-400 my-5">
            In today’s fast-paced digital landscape, fostering seamless
            collaboration among Developers and IT Operations.
          </p>
          <button className="bg-slate-800 my-2 text-slate-400 rounded-xl w-30 h-11 p-1">
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card5;
