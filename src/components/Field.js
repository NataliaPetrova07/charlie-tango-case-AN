
import styles from "../pages/Home.module.css"

export function Field({ label, hint = "", texthint = "", name, type = "text", id, ...rest }) {
  return (
    <div>
      <label className={styles.label} >{label}
        <span className={styles.span} id={hint}>{texthint}</span>
        <input
          id={id}
          name={name}
          type={type}
          aria-describedby={hint}
          {...rest}
        />
      </label>
    </div >
  );
}


/* 
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby


https://codepen.io/dannievinther/pen/OJyXrgb/f902000fbca547d1577326305acaf75f?editors=1100

 <label for="email">Email address</label>
    <span id="hint-mail">This field require at least an @-sign</span>
    <input
           id="email"
           name="xyz"
           type="email"
           placeholder="&nbsp;"
           aria-describedby="hint-mail"
           autocomplete="xyz"
           required>
    <span class="error" id="err-mail" aria-live="assertive">Type in your email address</span>
  </div>

  <div class="form-group">
    <label for="username">Username</label>
    <span id="hint-user">Must be between 5 and 10 characters long</span>
    <input
           id="username"
           name="xyz"
           type="text"
           placeholder="&nbsp;"
           minlength="5"
           maxlength="10"
           aria-describedby="hint-user"
           autocomplete="xyz"
           required>
    <span class="error" id="err-user" aria-live="assertive">Type in a valid username</span>
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <span id="hint-pass">Must be at least 8 characters with at least 1 digit, 1 lowercase and 1 uppercase character</span>
    <input
           id="password"
           name="password"
           type="password"
           placeholder="Type in a password"
           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
           aria-describedby="hint-pass"
           autocomplete="new-password"
           required>
    <span class="error" id="err-pass" aria-live="assertive">Type in a valid password</span>
  </div>

 */