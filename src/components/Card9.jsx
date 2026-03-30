const Card9 = () => {
  return (
    <div className="flex  justify-center  h-screen">
      <div className="flex gap-15 my-10">
        <div className="flex flex-col mx-20 my-20">
          <h5 className="font-extrabold text-2xl my-2">
            Plant <span className="text-green-900">.</span>
          </h5>
          <h1 className="font-extrabold text-4xl my-2">
            Find your <span className="text-green-700">greeny</span> stuff{" "}
            <br />
            for your room
          </h1>
          <div className="w-19 h-2 bg-green-700 my-2"></div>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae{" "}
            <br />
            maiores neque eaque ea odit placeat, tenetur illum distinctio nulla{" "}
            <br />
            voluptatum a corrupti beatae tempora aperiam quia id aliquam <br />
            possimus aut.
          </p>
          <button className="my-2 bg-green-500 w-36 h-10 p-2 text-white">
            Learn More
          </button>
        </div>

        <img src="/images/card9.avif" alt="are eda vande bharatam eda " />
      </div>
    </div>
  );
};

export default Card9;
