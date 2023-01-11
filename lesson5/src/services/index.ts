import axios from "axios";
import { ActorDetailsType, ActorType, MovieType } from "../types";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "1a2dd6fe37add126d94022ad600a33c1",
    },
});

const Apis = {
    getActors: async (): Promise<ActorType[]> => {
        const { data } = await instance.get("person/popular");
        return data.results;
    },
    getMovies: async (): Promise<MovieType[]> => {
        const { data } = await instance.get("movie/popular");
        return data.results;
    },
    getActor: async (id: string | undefined): Promise<ActorDetailsType> => {
        const { data } = await instance.get(`person/${id}`);
        return data;
    },
};

export default Apis;