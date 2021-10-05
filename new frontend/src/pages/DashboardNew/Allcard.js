import { useState,useEffect } from "react";
import ImgMediaCard from "../../components/Card/Cards";
import Grid from "@mui/material/Grid";
import "./Allcards.css";

export default function Allcard() {

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("http://localhost:300/course/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCourse(data);
      });
  }, []);

  course && console.log(course)

    return(
      <div className="card" >
          

          {course &&
        course.map((article) => (
          <Grid item xs={19}>
            <ImgMediaCard
              title={article.title}
              likes={article.likes}
              id={article._id}
              author={article.author}
              body={article.body}
              key={article._id}
              snippet={article.snippet}
              url={article.url}
            />
             </Grid>
        ))}
       
          
       
          
     
        </div>
        )
}