import React from 'react';
import MatchData from '../data/matchData';
import playerData from '../data/playerData';
import Player from './Player';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';

function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, MatchData);
  const onePlayer = parsedPlayerData[0];
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins} />
    </section>
  );
}

console.log(playerData);

export default PlayerList;