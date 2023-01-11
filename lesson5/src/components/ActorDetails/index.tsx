import Card from "./Card";
import Apis from "../../services";
import { UseQueryResult } from "react-query";
import { ActorDetailsType } from "../../types";
import useGetData from "../../hooks/useGetData";
import { useLocation, useParams } from "react-router-dom";

const ActorDetails = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const { data, isLoading, isError } = useGetData({
        name: "actor",
        api: () => Apis.getActor(id),
    }) as UseQueryResult<ActorDetailsType>;

    if (isLoading) return <div>Loading</div>;
    if (isError) return <div>Error</div>;
    return (
        <div>
            <Card {...data} movies={state} />
        </div>
    );
};

export default ActorDetails;