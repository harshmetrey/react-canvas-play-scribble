import React, { useState, useEffect } from "react";

import { Card, Input, Button } from "@material-ui/core";

function PlayerLobby(props) {

  const handleOnSubmit = () => {
      props.history.push({
        pathname: "/play-area",
      });
  };

  return (
    <div className="wrapper-container-home">
    <Card align="center">
      <div>Players in the Lobby</div>
      <Button color="primary" onClick={handleOnSubmit}>Start Game</Button>
    </Card>
    </div>
  );
}

export default PlayerLobby;
