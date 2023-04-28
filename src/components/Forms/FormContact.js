import styles from "../../pages/Home.module.css";

import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel
} from '@mui/material';

import { useState } from "react";
import { useRouter } from "next/router";

export default function FormContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault()
        //set error state to falso so it won't display
        setNameError(false)
        setEmailError(false)
        setPhoneError(false)

        //if the inpt is empty display error
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
            router.push('/buyers');
        }
    }


    return (

        <form className={styles.form} onSubmit={handleSubmit}>
            <TextField
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
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
                error={phoneError}
                required
            />
            <FormControlLabel
                control={<Checkbox />} label="Yes please, EDC may contact me with ofers and information related to the real estate market"
            />

            <Button
                variant="contained"
                /* onClick={() => console.log("clicked")} */
                type="submit"
            >
                Contact Buyers
            </Button>
        </form>
    );
}


