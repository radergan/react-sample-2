import Player from './Player'

function PlayerList(props) {
    const listPlayers = props.players.map(p => {
        return <Player 
            firstName={p.firstName} 
            lastName={p.lastName}
            jerseyNumber={p.jerseyNumber}
            hobbies={p.hobbies}
        />
    });
    return (
        <ul>
            {listPlayers}
        </ul>
    )

}

export default PlayerList