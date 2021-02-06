function Player(props) {

    const playerName = props.firstName + ' ' + props.lastName;

    const hobbies = props.hobbies.length > 0
        ? 
        props.hobbies.map(h => {
            return (<li>{h}</li>)
        })
        : <p class="red">No hobbies listed</p>;

    return (
        <div class="player">
        <h3>{playerName}</h3>
        <p>Jersey Number: {props.jerseyNumber}</p>
        {hobbies}
        </div>
    )
}
export default Player;