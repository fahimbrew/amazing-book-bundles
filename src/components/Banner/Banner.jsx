import bannerImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 md:h-96 my-10 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-3 md:space-y-5 text-center md:text-left">
          <h1 className="md:text-5xl text-3xl font-semibold md:w-3/5">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn bg-green-800 text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
