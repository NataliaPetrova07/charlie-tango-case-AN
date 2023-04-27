import styles from "../pages/Home.module.css"


export function Buttons(props) {
    return (
        <button className={styles.button}>{props.text}</button>
    );
}
