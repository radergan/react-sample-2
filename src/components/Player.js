function Player(props) {

    const playerName = props.firstName + ' ' + props.lastName;

    const hobbies = props.hobbies.map(h => {
        return (<li>{h}</li>)
    });

    return (
        <div class="player">
        <h3>{playerName}</h3>
        <p>Jersey Number: {props.jerseyNumber}</p>
        <ul>{hobbies}</ul>
        </div>
    )
}
export default Player;