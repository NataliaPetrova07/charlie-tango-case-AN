import styles from "../../pages/Home.module.css";

import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel
} from '@mui/material';

import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function FormContact(props) {

    //Handle database
    const formEl = useRef(null)
    //Validation with error message
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    //to send to success page  
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault()
        //set error state to falso so it won't display
        setNameError(false)
        setEmailError(false)
        setPhoneError(false)

        //if the input is empty display error
        if (name == '') {
            setNameError(true)
        }
        if (email == '') {
            setEmailError(true)
        }
        if (phone == '') {
            setPhoneError(true)
        }
        //if all the fields, on submit send to buyers page
        if (name && email && phone) {
            //change route to the success page (still needs to be created)
            /*  router.push('/buyers'); */

            //Sedn to database
            const payload = {
                name: "",
                email: "",
                phone: ""
            }
            fetch("/api/add-info", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        }
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate autoComplete="off" ref={formEl}>
            <TextField
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
                error={nameError}
                required
            />
            <TextField
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
                error={emailError}
                type="email"
                required
            />
            <TextField
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                name="phone"
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                size="small"
                error={phoneError}
                required
            />
            <FormControlLabel
                control={<Checkbox />} label="Yes please, EDC may contact me with ofers and information related to the real estate market"
            />
            <Button
                variant="contained"
                //Thi line below is to push to store the data
                /* onClick={addToInfo} */
                type="submit"
            >
                Contact Buyers
            </Button>
        </form>
    );
}


