import React from 'react';
import Game from "./component/Game";
import {GameContextProvider} from "./context/GameContext";

function App() {
  return (
      <div className="container" id="game">
          <GameContextProvider>
              <Game/>
          </GameContextProvider>
      </div>
  );
}

export default App;
