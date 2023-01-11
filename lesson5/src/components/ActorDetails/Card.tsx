import { ActorDetailsType, KnownForType } from "../../types";
import { IMAGE_BASE_URL } from "../../services";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MovieItem from "../BestFilms/Card";
type MoviesType = {
    movies: KnownForType[];
};
const Details = ({
    profile_path,
    name,
    gender,
    biography,
    movies,
}: MoviesType & ActorDetailsType) => {
    return (
        <div>
            <div className="w-full h-full flex-col lg:flex-row flex bg-gray-300 rounded-2xl gap-4 p-4">
                <LazyLoadImage
                    className="bg-cover bg-center w-64 rounded-xl"
                    src={
                        profile_path
                            ? `${IMAGE_BASE_URL}${profile_path}`
                            : "https://media.defense.gov/2018/Nov/14/2002062952/-1/-1/0/181114-D-BD104-003.JPG"
                    }
                    alt={name}
                />
                <div>
                    <div>
                        <p className="text-lg font-bold sm:text-4xl">{name}</p>
                        <p className="mb-8 mt-2 font-semibold">
                            {gender === 0 ? "Male" : "Female"}
                        </p>
                    </div>
                    <p>{biography}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {movies?.map(({ id, ...movie }) => (
                    <MovieItem popularity={0} id={id} key={id} {...movie} />
                ))}
            </div>
        </div>
    );
};

export default Details;