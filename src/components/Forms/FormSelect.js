import styles from "../../pages/Home.module.css";
import { estateTypes } from "@/data/estateTypes";

import {
    TextField,
    Button,
    InputAdornment,
    InputLabel,
    MenuItem,
    FormControl,
    Select
} from '@mui/material';

import { useState } from "react";
import { useRouter } from "next/router";

export default function FormSelect() {

    let estateType = estateTypes

    const [price, setPrice] = useState("");
    const [size, setSize] = useState("");
    const [zip, setZip] = useState("");
    const [type, setType] = useState("");

    const [priceError, setPriceError] = useState(false);
    const [sizeError, setSizeError] = useState(false);
    const [zipError, setZipError] = useState(false);

    const router = useRouter();

    const handleChange = (e) => {
        setType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        //set error state to falso so it won't display
        setPriceError(false)
        setSizeError(false)
        setZipError(false)

        //if the input is empty display error
        if (price == '') {
            setPriceError(true)
        }
        if (size == '') {
            setSizeError(true)
        }
        if (zip == '') {
            setZipError(true)
        }

        //if all the fields, on submit send to buyers page
        if (price && size && zip && type) {
            router.push('/buyers');
        }
    }


    return (

        <form className={styles.form} onSubmit={handleSubmit} method="GET" action="/buyers" noValidate autoComplete="off">
            <TextField
                onChange={(e) => setPrice(e.target.value)}
                id="price"
                name="price"
                label="Price"
                variant="outlined"
                fullWidth
                margin="normal"
                error={priceError}
                //helper text to show when error fix this
                helperText="Incorrect entry."
                required
            />
            <TextField
                onChange={(e) => setSize(e.target.value)}
                id="size"
                name="size"
                label="Property Size"
                variant="outlined"
                fullWidth
                margin="normal"
                //The icon for square meters is not showing, why?
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                error={sizeError}
                required
            />
            <TextField
                onChange={(e) => setZip(e.target.value)}
                id="zip"
                name="zip"
                label="Zip Code"
                variant="outlined"
                fullWidth
                margin="normal"
                error={zipError}
                required
            />

            <FormControl
                fullWidth
                margin="normal"
                required>
                <InputLabel id="type">Property Type</InputLabel>
                <Select
                    labelId="type"
                    id="type"
                    value={type}
                    label="Property Type"
                    onChange={handleChange}
                >
                    {estateType.map((estate) => (
                        <MenuItem value={estate.id} key={estate.id} >{estate.name}</MenuItem>
                    ))
                    };
                </Select>
            </FormControl>
            <Button
                variant="contained"
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
}
