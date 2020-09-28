import React, { useState, useEffect } from "react";

import { Card, Box, Button, Fab } from "@material-ui/core";

import { FileCopy } from "@material-ui/icons";

function PlayerLobby(props) {
  const handleOnSubmit = () => {
    props.history.push({
      pathname: "/play-area"
    });
  };

  return (
    <div className="wrapper-container-home">
      <Box align="center" p={2}>
        Players in the Lobby
      </Box>
      <Box p={6}>
        <Card align="center">
          <Button variant="contained" color="primary" onClick={handleOnSubmit}>
            Start Game
          </Button>
        </Card>
      </Box>
      <Box p={2}>
        <Fab variant="extended" size="small" aria-label="add">
          <FileCopy /> Share invite code
        </Fab>
      </Box>
    </div>
  );
}

export default PlayerLobby;
