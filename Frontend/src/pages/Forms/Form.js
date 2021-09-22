import React, { Component, useState } from 'react';
import { useHistory } from "react-router-dom";
import './Form.css';


export default function Form() {


  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [author, setAuthor] = useState("");
  const [body,setBody] = useState("")
  const [url, setUrl] = useState("")

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const details = {title , snippet , author , body , url}
    fetch("http://localhost:300/course/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    }).then(() => {
      history.push("/dashboard");
    });
  }


 
    return (
      <div className ="Form">
        <form  onSubmit={handleSubmit}>
          <label> Title </label>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
          
          <label> Snippet </label><br />
          <input type="text" name="snippet" value={snippet} onChange={(e) => setSnippet(e.target.value)}/> <br />

          <label> Author </label><br />
          <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} /> <br />


          <label> URL </label><br />
          <input type="text" name="url" value={url} onChange={(e) => setUrl(e.target.value) } /> <br />

          <label> Body </label>
          <textarea  value={body} onChange={(e) => setBody(e.target.value)}/>   <br />



         <div className="but"> <input type="submit" value="Create New Course" /></div>
        </form>
      </div>
    )
  

}

