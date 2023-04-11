const Main = ({imageUrl, name, location, position}) => {
    return (
        <div>
            <img src={imageUrl} alt={name} width="200px"/>
            <ul>
                <li>Name: {name}</li>
                <li>Location: {location}</li>
                <li>Position: {position}</li>
            </ul>
        </div>
    );
}

export default Main