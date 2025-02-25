import React from "react";
import styles from "./Display.module.css";

const Display = ({ DisplayValue }) => {
  return (
    <>
      <input
        type="text"
        className={styles.display}
        value={DisplayValue}
        readOnly
      />
      {/*ham batare h ki yaha sirf read hogi*/}
    </>
  );
};

export default Display;
