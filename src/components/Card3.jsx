import laptop from "../assets/image-1.jpg";
const Card3 = () => {
  return (
    <div className="bg-black flex justify-center items-center h-screen">
      <div className="w-110 h-125 bg-slate-900 rounded-xl">
        <img
          src={laptop}
          className="max-w-full h-auto rounded-xl object-cover"
          alt="setup-img"
        />
        <span className="flex items-center mx-auto px-2 my-5 bg-indigo-900 w-25 rounded h-5 text-blue-400">
          <svg
            class="w-3 h-3 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
            />
          </svg>
          Trending
        </span>

        <h1 className="text-white font-bold text-2xl text-center">
          Streamlining your design <br /> process today.
        </h1>

        <div className="w-full flex my-3">
          <button className="bg-blue-600 mx-auto text-white rounded-xl w-30 h-9 p-1">
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card3;
