import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Numbers"
        name=""
        id={styles.display}
        value={displayValue}
        readOnly
      />
    </>
  );
};

export default Display;
