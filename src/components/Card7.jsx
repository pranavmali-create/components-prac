const Card7 = () => {
  return (
    <div className="bg-black flex justify-center items-center h-screen">
      <div className="bg-slate-900 flex w-110 h-110 rounded-xl">
        <form className="text-white m-8">
          <legend className="text-2xl font-bold">Sign in our platform</legend>
          <div className="flex flex-col my-4">
            <label htmlFor="email" className="my-3">
              Your email
            </label>
            <input
              type="text"
              placeholder="example@company.com"
              className="bg-slate-800 p-2 rounded-2xl w-90 outline-none focus:ring-blue-500 focus:ring"
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="password" className="my-3">
              Your password
            </label>
            <input
              type="password"
              placeholder="********"
              className="bg-slate-800 p-2 rounded-2xl w-90 focus-within:ring-blue-500 outline-none focus-within:ring"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-500"
              ></input>
              <p className="mx-3">Remember me</p>
            </div>
            <div className="text-blue-600 hover:underline">Lost password?</div>
          </div>

          <button className="bg-blue-600 p-2 rounded-2xl hover:bg-blue-800 my-3 w-90">
            Login to your account
          </button>

          <div className="flex items-center gap-3">
            <p className="text-slate-400">Not registered?</p>
            <p className="text-blue-500 hover:underline">Create account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Card7;
