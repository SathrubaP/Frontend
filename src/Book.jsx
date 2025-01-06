import React from 'react';
import './App.css';

function Book() {
  return (
    <div className="container">
      <fieldset>
        <legend>Slambook</legend>
        <form>
          <label For="name">Name: </label>
          <input type="text" id="name" /><br/>
          <label For="Nickname">NickName: </label>
          <input type="text" id="Nickname" /><br/>
          <label For="address">Address: </label>
          <input type="text" id="address" /><br/>
          <label for="dob">Date of Birth: </label>
          <input type="date" id="dob" name="dob"></input><br/>
          <label For="Phone no">Phone no: </label>
          <input type="text" id="Phone no" /><br/>
          <label For="Memory">Memories: </label>
          <textarea id="Memory" name="Memory" rows="4" cols="30"></textarea><br/>
          <label for="gender">Gender: </label>
          <input type="radio" id="male" name="gender" value="male"/>        
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="female"/>
          <label for="female">Female</label><br/>
          <label>Favourite Actor:</label>
          <input type="checkbox" id="checkbox1" value="Checkbox 1"/> Vijay
          <input type="checkbox" id="checkbox1" value="Checkbox 1"/>Surya
          <input type="checkbox" id="checkbox1" value="Checkbox 1"/>Ajith 
          <input type="checkbox" id="checkbox1" value="Checkbox 1"/>Danush <br/>
          <label for="options">School: </label>
          <select id="options">
            <option value="" disabled selected></option>
            <option value="Option 1">Shri Swamy</option>
            <option value="Option 2">Modern Academy</option>
            <option value="Option 3">Little angels</option>
          </select><br/>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default Book;