export type ActorType = {
    adult?: boolean | undefined;
    gender: number;
    id: number;
    known_for: KnownForType[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
};

export type KnownForType = {
    adult?: boolean | undefined;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title?: string;
    overview: string;
    poster_path: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
};

export type MovieType = {
    adult?: boolean | undefined;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title?: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date?: string | undefined;
    title?: string | undefined;
    video?: boolean;
    vote_average: number;
    vote_count: number;
};

export type ActorDetailsType = {
    adult?: boolean | undefined;
    also_known_as?: string[] | undefined;
    biography?: string | undefined;
    birthday?: string;
    deathday?: null | string;
    gender?: number;
    homepage?: null | string;
    id?: string;
    imdb_id?: string;
    known_for_department?: string;
    name?: string;
    place_of_birth?: null | string;
    popularity?: number;
    profile_path?: null | string;
};