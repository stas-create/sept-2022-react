const Space = ({mission}) => {
    const {mission_name,launch_year,links} = mission;
    return (
        <div>
            <h2>{mission_name}</h2>
            <p>
                {launch_year}
            </p>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Space};