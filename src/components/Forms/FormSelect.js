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

import { useContext } from "react";
import { DispatchContext } from "@/contexts/SellerContext";

export default function FormSelect(props) {

    //We need  to update the data 
    const dispatch = useContext(DispatchContext);

    function addToInfo() {
        dispatch({
            action: "ADD_INFO",
            payload: {
                name: props.name,
                email: props.email,
                phone: props.phone
            },
        });
    }

    //Getting the stored data
    /* const dispatch = useContext(DispatchContext); */


    /*  setPrice;
           setSize;
           setZip;
           setType;
           dispatch({
               action: "ADD_INFO",
               payload: {
                   name: e.target.value,
                   email: e.target.value,
                   phone: e.target.value
               },
           }) */

    //to get the different types of state - holds the value of the select field
    let estateType = estateTypes
    const handleChange = (e) => {
        setType(e.target.value);
    };

    //validation with error message & holds the value of the input field
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    const [priceError, setPriceError] = useState(false);
    const [sizeError, setSizeError] = useState(false);
    const [zipError, setZipError] = useState(false);

    //to direct to buyers list after the validation
    const router = useRouter();

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
        //if all the fields are filled, on submit send to buyers page 
        if (price && size && zip && type) {
            /*  router.push('/buyers'); */
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
                size="small"
                error={priceError}
                //helper text to show when error fix this
                /*  helperText="Incorrect entry." */
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
                size="small"
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
                size="small"
                error={zipError}
                required
            />
            <FormControl
                fullWidth
                margin="normal"
                size="small"
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
                //Thi line below is to push to store the data
                onClick={addToInfo}
            >
                Submit
            </Button>
        </form>
    );
}
