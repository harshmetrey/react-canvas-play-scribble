import React, { useState, useEffect } from "react";

import { Card, Input, Button } from "@material-ui/core";

function Home(props) {
  const playerName = localStorage.getItem('playerName')
  const [name, setName] = useState(playerName);
  const [error, setError] = useState(null);

  const handleOnSubmit = () => {
    if (name) {
      setError(null);
      props.history.push({
        pathname: "/player-lobby",
      });
      localStorage.setItem('playerName', name)
    } else {
      setError("Enter player name to start!");
    }
  };

  return (
    <div className="wrapper-container-home">
    <Card align="center">
      <Input
        name="user_name"
        id="user-name"
        placeholder="Player name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button color="primary" onClick={handleOnSubmit}>Create Room</Button>
      {error}
    </Card>
    </div>
  );
}

export default Home;
