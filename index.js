  
superbowlWin = (games) => {
  let winningGame = games.find( game => game.result === "W" )
  return !!winningGame ? winningGame.year : undefined
}