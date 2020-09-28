import React, { useState, useEffect } from "react";

import { Card, Input, Button, Fab } from "@material-ui/core";

import { FileCopy } from '@material-ui/icons';



function PlayerLobby(props) {
  const handleOnSubmit = () => {
    props.history.push({
      pathname: "/play-area"
    });
  };

  return (
    <div className="wrapper-container-home">
      <Card align="center">
        <div>Players in the Lobby</div>
        <Button color="primary" onClick={handleOnSubmit}>
          Start Game
        </Button>
      </Card>
      <Fab color="primary" aria-label="add">
        Share invite code<FileCopy />
      </Fab>
    </div>
  );
}

export default PlayerLobby;
