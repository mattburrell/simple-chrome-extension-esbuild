import styles from "./hello-world.module.css";

export function HelloWorld() {
  const handleOnClick = () => {
    alert("You clicked me!");
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.heading}>Hello World!</h1>
      <button className={styles.btn} onClick={handleOnClick}>
        Click Me
      </button>
    </div>
  );
}
