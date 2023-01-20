import {useEffect, useState} from "react";
import {getMission} from "../../services/space.api.axio";
import {Space} from "../space/Space";

const SpaceX = () => {
    let [mission, setMission] = useState([]);
    useEffect(()=>{
        getMission().then(value => setMission(value.data));

    },[])
    return (
        <div>
            {mission.filter(({launch_year}) => launch_year !== "2020").map((mission,index)=><Space key={index} mission={mission}/>)}
        </div>
    );
};

export {SpaceX};