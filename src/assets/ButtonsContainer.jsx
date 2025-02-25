import React from "react";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((name) => (
        <button key={name} className={styles.buttons} onClick={()=>onButtonClick(name)}>{name}</button>
      ))}
      {/* <button className={styles.buttons}>C</button>
      <button className={styles.buttons}>1</button>
      <button className={styles.buttons}>2</button>
      <button className={styles.buttons}>+</button> */}
    </div>
  );
};

export default ButtonsContainer;
