import { MovieType } from "../../types";
import { IMAGE_BASE_URL } from "../../services";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieItem = ({
    id,
    title,
    poster_path,
    backdrop_path,
    vote_average,
}: MovieType) => {
    return (
        <div className="lg:w-72 h-full relative cursor-default group">
            <LazyLoadImage
                className="bg-cover bg-center w-full rounded-xl"
                src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : backdrop_path}
                alt={title}
            />
            <div className="absolute inset-0 flex justify-center rounded-lg gap-4 flex-col items-center w-full h-full transition-all duration-400 group-hover:bg-opacity-90 group-hover:bg-gray-900">
                <span className="absolute top-5 right-4 rounded-full bg-amber-400 text-white px-3 py-0.5 text-sm hidden group-hover:flex">
                    {vote_average}
                </span>
                <p className="text-center text-lg sm:text-xl text-white font-semibold hidden group-hover:flex">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default MovieItem;