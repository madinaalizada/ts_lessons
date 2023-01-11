import { Link } from "react-router-dom";
import { ActorType } from "../../types";
import { IMAGE_BASE_URL } from "../../services";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ActorItem = ({ id, name, profile_path, known_for }: ActorType) => {
    return (
        <div className="lg:w-72 h-full relative cursor-default group">
            <LazyLoadImage
                className="bg-cover bg-center w-full rounded-xl"
                src={
                    profile_path
                        ? `${IMAGE_BASE_URL}${profile_path}`
                        : "https://media.defense.gov/2018/Nov/14/2002062952/-1/-1/0/181114-D-BD104-003.JPG"
                }
                alt={name}
            />
            <div className="absolute inset-0 flex justify-center rounded-lg gap-4 flex-col items-center w-full h-full transition-all duration-400 group-hover:bg-opacity-90 group-hover:bg-gray-900">
                <p className="text-center text-lg sm:text-xl text-white font-semibold hidden group-hover:flex">
                    {name}
                </p>
                <Link to={`/actor/${id}`} state={known_for}>
                    <button className="text-sm bg-gray-200 rounded px-4 py-1.5 hidden group-hover:flex">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ActorItem;