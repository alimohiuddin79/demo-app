import { Link } from "react-router-dom";

const routes = [
  {
    image: "/wedding.jpg",
    url: "/wedding",
    title: 'wedding'
  },
  {
    image: "/maternity.jpg",
    url: "/maternity",
    title: 'maternity'
  },
  {
    image: "/baby.jpg",
    url: "/baby",
    title: 'new-born-baby'
  },
  {
    image: "/birthday.jpg",
    url: "/birthday",
    title: 'birthday'
  },
  {
    image: "/business.jpg",
    url: "/business",
    title: 'business'
  },
];

const Home = () => {
  return (
    <div
      className="
        flex
        justify-between
        px-5
        gap-4
        flex-wrap
        lg:flex-nowrap
        relative
      "
    >
      <div
        className="
          absolute
          my-6
          lg:my-0
          top-0
          left-0
          right-0
          lg:top-12
          z-10
          w-full
        "
      >
        <div
          className="
            p-4
            bg-black/30
            rounded-lg
            text-white
            text-2xl
            lg:text-4xl
            font-bold
            mx-auto
            max-w-fit
          "
        >
          Select Your Occasion
        </div>
      </div>
      {routes.map((route) => (
        <Link
          key={route.url}
          to={route.url}
          className="
          flex
          flex-col
          items-center
          text-center
          lg:flex-1
        "
        >
          <img
            src={route.image}
            alt={route.url}
            className="
              aspect-[9/16]
              transition-all
              duration-150
              scale-100
              hover:scale-105
              rounded-3xl
            "
          />
          <div
            className="
              text-base
              font-serif
              font-semibold
              text-slate-500
              uppercase
              my-6
            "
          >
            {route.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
