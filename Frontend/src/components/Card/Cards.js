import React ,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import IconButton from "@mui/material/IconButton";


export default function ImgMediaCard(props) {


  const [likecounter,setLikeCounter] = useState(props.likes)
  function handleLike() {
    fetch(`http://localhost:300/course/${props.id}/like`, {
      method: "POST",
    }).then(() => {
      setLikeCounter((preLike) => preLike + 1);
    });
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="http://apnaahangout.com/wp-content/uploads/2020/02/JEE-Main-2021.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {props.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.body.substring(0, 150)}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="add to favorites" onClick={handleLike}>
          <StarsRoundedIcon />
          {likecounter}
        </IconButton>
        <Button size="small">Read More</Button>

      </CardActions>
    </Card>
  );
}
