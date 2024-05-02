const Banner = () => {
  return (
    <div className="bg-cover bg-center py-24 max-w-[1100px] mx-auto my-10 flex justify-center items-center rounded-3xl h-[500px] relative" style={{backgroundImage: "url('./banner.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-3xl flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-4xl font-bold text-white mb-4">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-lg text-white mb-8">Let's have fun, get creative, and cook up a storm together.</p>
            <div className="flex justify-center">
              <button className="btn rounded-3xl border-t-neutral-50 border-2 bg-transparent text-white font-bold hover:bg-red-800 mr-14">Explore Now</button>
              <button className="btn rounded-3xl border-t-neutral-50 border-2 bg-transparent text-white font-bold hover:bg-red-800">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
