function Player(props) {

    const playerName = props.firstName + ' ' + props.lastName;

    const hobbies = props.hobbies.map(h => {
        return (<li>{h}</li>)
    });

    let hobbySection = (hobbies.length > 0 ? <ul>{hobbies}</ul> : <p class="red">no hobbies</p>);

    return (
        <div class="player">
        <h3>{playerName}</h3>
        <p>Jersey Number: {props.jerseyNumber}</p>
        {hobbySection}
        </div>
    )
}
export default Player;