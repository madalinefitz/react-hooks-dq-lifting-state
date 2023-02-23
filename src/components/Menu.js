import React, { useState } from "react";

function Menu({handleChange, darkMode}) {
  
    
  //   (darkMode) => !darkMode
 //when checked = false dark mode = false
 //( darkMode ? e.target.checked = false : e.target.checked = true)


  // const changeCheck = (e) => {

  //   setCheckedValue (e.target.checked ? e.target.checked = true : e.target.checked = false)
   

  // }

  // console.log(e.target.checked)
      
      
      //(props.darkMode = true : props.darkMode = false)
    
    
    
    // (props.darkMode ? e.target.checked = true : e.target.checked = false)
    
 

  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={darkMode}
          onChange={handleChange}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
