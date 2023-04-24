import styles from "../pages/Home.module.css"


export function Button(props) {
    return (
        <button className={styles.button}>{props.text}</button>
    );
}
