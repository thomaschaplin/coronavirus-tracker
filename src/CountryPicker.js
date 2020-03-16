import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default function CountryPicker(props) {
    const {
        countriesOptions,
        selectedCountry,
        onChangeCountry,
    } = props

    return (
        <div>
            <TextField
                label="Country"
                variant="outlined"
                className="select"
                select
                value={`${selectedCountry}`}
                onChange={onChangeCountry}
                helperText="Select your country"
            >
                {countriesOptions.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}
