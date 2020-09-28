import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Paper,
  TextField,
  Button,
  Typography,
  ButtonGroup,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import CanvasDraw from "react-canvas-draw";

import data from "../../constants/data.json";

function DrawingArea(props) {
  const [name, setName] = useState();
  const [guess, setGuess] = useState([]);
  const [word, setWord] = useState();
  const [options, setOptions] = useState([]);
  const [win, setWin] = useState(false);
  const [score, setScore] = useState(data.players);
  const [open, setOpen] = useState(false);
  const [brushRadius, setBrushRadius] = useState(4);

  const RandomArry = (sourceArray, neededElements) => {
    var result = [];
    for (var i = 0; i < neededElements; i++) {
      result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
    }
    return result;
  };

  const saveableCanvas = React.createRef();

  useState(() => {
    setOpen(true);
    const playeName = localStorage.getItem('playerName')
    setName(playeName);
    const newplayer = {
      name: playeName,
      points: 0
    };
    setScore([...score, ...newplayer]);
    var randoms = RandomArry(data.words, 3);
    setOptions(randoms);
  }, [name]);

  const handleKeyDown = e => {
    let div = document.getElementById("guess-list");
    if (e.keyCode == "13") {
      if (word == guess.toLowerCase()) {
        setWin(true);
        div.innerHTML += `<ul>
      <li class="correct"><b>${name} has guessed the word!</li>
      </ul>`;
        setOptions(RandomArry(data.words, 3));
        setOpen(true);
        const len = score.length - 1
        console.log(score)
        score[len].points = score[len].points + 10
      } else {
        div.innerHTML += `<ul>
      <li class="guess"><b>${name}</b>: ${guess}</li>
      </ul>`;
      }
      div.scrollTop = div.scrollHeight - div.clientHeight;
      document.getElementById("guess").value = "";
    }
  };

  const handleOptionSelection = option => {
    setWord(option);
    setOpen(false);
  };

  const WordSelectionModal = () => {
    return (
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">
          {"Choose a word!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Button
              variant="contained"
              onClick={() => handleOptionSelection(options[0])}
            >
              {options[0]}
            </Button>
            <Button
              variant="contained"
              onClick={() => handleOptionSelection(options[1])}
            >
              {options[1]}
            </Button>
            <Button
              variant="contained"
              onClick={() => handleOptionSelection(options[2])}
            >
              {options[2]}
            </Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };

  const PlayerList = props => {
    return (
      <Grid container>
        {props.data &&
          props.data.map(item => (
            <Grid>
              <Box ml={1} variant="caption" className="pad-1">
                <strong>{item.name}</strong> : {item.points}
              </Box>
            </Grid>
          ))}
      </Grid>
    );
  };

  return (
    <div className="wrapper-container">
      {WordSelectionModal()}
      <Grid container>
        <Grid item xs={6} md={6}>
          <Typography variant="caption">Player {name} </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography variant="caption">Guess word : {word} </Typography>
        </Grid>
      </Grid>
      <marquee>
        <PlayerList data={score} />
      </marquee>
      <br />
      <Card id="main">
        <Button
          onClick={() => {
            saveableCanvas.clear();
          }}
          variant="contained"
          color="primary"
        >
          Clear
        </Button>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>Brush Size</Button>
          <Button
            variant="outlined"
            onClick={() => setBrushRadius(brushRadius + 1)}
          >
            +
          </Button>
          <Button
            variant="outlined"
            onClick={() => setBrushRadius(brushRadius - 1)}
          >
            -
          </Button>
        </ButtonGroup>
        <CanvasDraw
          ref={canvasDraw => (saveableCanvas = canvasDraw)}
          brushRadius={brushRadius}
          hideGrid
          canvasWidth="100%"
        />
      </Card>
      <div className="canvas-guess-area">
        <Paper id="guess-list" className="guess-list" />
        <TextField
          name="guess"
          margin="normal"
          size="small"
          fullWidth
          id="guess"
          onChange={e => setGuess(e.target.value)}
          onKeyUp={e => handleKeyDown(e)}
        />
      </div>
    </div>
  );
}

export default DrawingArea;
