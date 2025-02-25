import React from "react";
import { useState } from "react";
import styles from "./App.module.css";
import Display from "./assets/Display";
import ButtonsContainer from "./assets/ButtonsContainer";

const App = () => {
  const [CalVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(CalVal);
      setCalVal(result);
      {
        /*eval func me koi bhi string value ko vo apne
         aap solve krke result dedeta h*/
      }
    } else {
      let newDisplayValue = CalVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display DisplayValue={CalVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
};

export default App;
