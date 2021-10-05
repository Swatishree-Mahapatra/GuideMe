import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from "@material-ui/core/TextField";
import { colors, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    padding: 20,
  },
  btn: {
    backgroundColor: "skyblue",
  },
});

export default function Discussion() {
  const classes = useStyles();

  const [comment, setComment] = useState("");
  const [localComment, setlocalComment] = useState([]);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const testInput = { comment };
    setlocalComment((localComment) => localComment.concat(testInput.comment));

    fetch(`http://localhost:300/api/article/${id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    })
      .then(() => {
        setComment("");
      })
      .catch((err) => console.log(err));
    };

  useEffect(() => {
    fetch(`http://localhost:300/api/article/${id}/comment`)
      .then((res) => res.json())    
      .then((data) =>{
        setlocalComment((localComment) => localComment.concat(data))
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <form
        className={classes.root}
        action=""
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          className={classes.field}
          id="outlined-helperText"
          label="Share your thoughts"
          multiline
          rows={3}
          fullWidth
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button className={classes.btn} type="submit">
          Add
        </Button>
      </form>

      <div>
        {localComment.map((text) => (
          <p>{text}</p>
        ))}
      </div>
    </>
  );
}