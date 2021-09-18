import React, { Component } from 'react';
import './Form.css';

class Form extends Component {







  render() {
    return (
      <div>
        <form  >
          <label> Title </label>
          <input type="text" name="title"  /> <br />

          <label> Snippet </label><br />
          <input type="text" name="snippet"  /> <br />

          <label> Author </label><br />
          <input type="text" name="author"  /> <br />


          <label> URL </label><br />
          <input type="text" name="url"  /> <br />

          <label> Body </label>
          <textarea  />   <br />



         <div className="but"> <input type="submit" value="Create New Course" /></div>
        </form>
      </div>
    )
  }

}

export default Form;