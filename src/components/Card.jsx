const Card = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
    <div className="bg-blue-950 w-95 h-65 rounded-xl">
      <h5 className="text-2xl text-white pl-5 pt-5 ">Noteworthy technology acquisitions 2021</h5>
      <p className="pl-7 pt-5 pr-5 text-gray-400 pb-4">
        Here are the biggest technology acquisitions of 2025 so far, in reverse
        chronological order.
      </p>
      <button className="bg-blue-600 text-white rounded-xl w-30 h-9 p-1 ml-4">Read more →</button>
    </div>
    </div>
  );
};

export default Card;
