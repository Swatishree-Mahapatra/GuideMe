import { useState,useEffect } from "react";
import ImgMediaCard from "../Card/Cards";
import Grid from "@mui/material/Grid";
import "./Allcard.css";

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
      <div className="card">
          

          {course &&
        course.map((article) => (
          <Grid item xs={3}>
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
          {/* <Grid item xs={3}>
            <ImgMediaCard title="Calculus"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Calculus"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Calculus"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Calculus"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Calculus"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Algebra"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard  title="Conic Section"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard  title="Integration"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard  title="Integration"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Integration"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Integration"/>
          </Grid>

          <Grid item xs={3}>
            <ImgMediaCard title="Integration"/>
          </Grid>

          <Grid item xs={3}>
            <ImgMediaCard title="Integration"/>
          </Grid>

          <Grid item xs={3}>
            <ImgMediaCard title="Integration"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Calculus"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Algebra"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard  title="Conic Section"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard  title="Integration"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Calculus"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Algebra"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard  title="Conic Section"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard  title="Integration"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Calculus"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard title="Algebra"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard  title="Conic Section"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard  title="Integration"/>
          </Grid>
          <Grid item xs={3}>
            <ImgMediaCard  title="Integration"/>
          </Grid> */}
          
       
          
     
        </div>
        )
}