import React, {useState} from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  

  function handleChange(){
    setDarkMode(!darkMode)
  }

  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header darkMode={darkMode} handleChange={handleChange}/>
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
