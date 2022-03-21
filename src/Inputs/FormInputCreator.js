import React from 'react';

import { FormControl, MenuItem, Select, InputLabel, FormControlLabel, RadioGroup, Radio, FormLabel, TextField, Grid} from '@mui/material';

const FormInputCreator = (props) => {

    const formContent = props.jsonObject.map(element =>
    {
        if( element?.name === "first-name" || 
            element.name === "last-name" || 
            element?.name === "phone-number" || 
            element?.name === "extra-number" || 
            element?.name === "postal-code" || 
            element.name === "email" ||
            element?.name === "company-name" || 
            element?.name === "commercial-registeration-number" || 
            element?.name === "commissioner-phone-number" ||
            element.name === "building-number" ||
            element.name === "street-name" || 
            element?.name === "district-number" || 
            element?.name === "city-name" )
        {
            return (
                <React.Fragment key={element.name}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name={element.name}
                            type={element.type ? element.type : "text"}
                            label={element.label}
                            value={props.values && props.values[element.name]}
                            onChange={props.handleChange}
                            />
                        {props.errors[element.name] ? <div style={{color:"red", marginTop: "20px"}}>{props.errors[element.name]}</div> : null}
                    </Grid>    

                </React.Fragment>
            )
        }
        if(element.name === "date-of-birth")
        {
            return (
                <Grid item xs={6} key={element.name}>
                    <TextField  
                        name={element.name}
                        type={element.type}
                        label={element.label}
                        onBlur={props.handleBlur}
                        // inputFormat="MM/dd/yyyy"
                        value={props.values && props.values[element.name]}
                        onChange={props.handleChange}
                        sx={element.sx}
                        InputLabelProps={element.shrink ? {shrink: true} : false}
                    />
                    {props.errors[element.name] ? <div style={{color:"red", marginTop: "20px"}}>{props.errors[element.name]}</div> : null}
                </Grid>
            )
        }
        if( element.name === "license-type" ||
            element.name === "education")
        {
            return (
                <React.Fragment  key={element.name}>
                    <Grid item xs={6}>
                        <FormControl fullWidth sx={element.sx}>
                            <InputLabel id={element.labelId}>{element.label}</InputLabel>
                            <Select 
                                labelId={element.labelId}
                                id={element.selectId}
                                name={element.name}
                                label={element.label}
                                value={props.values[element.name]}
                                onChange={props.handleChange}
                                >
                                    {element.options.map(option =>
                                    (
                                        <MenuItem key={option.value} value={option.value}>{option.title}</MenuItem> 
                                    ))}
                            </Select>
                            {props.errors[element.name] ? <div style={{color:"red", marginTop: "20px"}}>{props.errors[element.name]}</div> : null}
                        </FormControl>
                    </Grid>
                </React.Fragment>
            )
        }
        if(element.name === "radio-buttons-group") // Gender
        {
            return (
                <Grid item xs={12} key={element.name} sx={{marginTop: "-20px"}}>
                    <FormControl>
                        <FormLabel id={element.labelId}>{element.label}</FormLabel>
                        <RadioGroup 
                                row 
                                aria-label={element.ariaLabel} 
                                aria-labelledby={element.ariaLabel}
                                name={element.name}
                                value={props.values[element.name]}
                                onChange={props.handleChange}
                            >
                                {element.options.map(option =>
                                (
                                    <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                                ))}
                        </RadioGroup>
                        {props.errors[element.name] ? <div style={{color:"red", marginTop: "20px"}}>{props.errors[element.name]}</div> : null}
                    </FormControl>
                </Grid>
            )
        }

        return null;
    });

    return (
        <React.Fragment>
            {formContent}
        </React.Fragment>
    )
}

export default FormInputCreator;