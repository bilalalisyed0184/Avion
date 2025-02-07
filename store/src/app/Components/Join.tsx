const Join = () => {
    return (
      <div className="w-full h-auto lg:h-[481px] bg-[#F9F9F9] flex items-center justify-center">
        <div className="w-full max-w-[1273px] h-auto lg:h-[364px] bg-white flex items-center flex-col p-4 lg:p-0">
          <div className="w-full max-w-[571px] h-auto mt-[40px] lg:mt-[65px] flex flex-col justify-between items-center text-center">
            <h1 className="md:text-[28px] sm:text-[24px] lg:text-[36px] md:mb-0 mb-4">
              Join the club and get the benefits
            </h1>
            <p className="w-full max-w-[470px] text-center text-sm sm:text-base">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
            </p>
          </div>
          <div className="w-full max-w-[472px] h-[56px] flex mt-8 lg:mt-16">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-3/4 h-[56px] bg-[#F9F9F9] px-4 lg:px-8"
            />
            <button className="w-1/4 h-[56px] bg-[#2A254B] text-white text-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Join;
  