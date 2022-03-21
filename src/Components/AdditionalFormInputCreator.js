import React from 'react'
import FormInputCreator from "../Inputs/FormInputCreator";
import { PERSONAL_DATA, CONTACT_DATA, COMPANY_DATA } from "../Inputs/Schema";

import Grid from "@mui/material/Grid";

export const AdditionalFormInputCreator1 = (props) => {

    const formContent1 = <FormInputCreator 
                            jsonObject={PERSONAL_DATA} 
                            errors={props.errors} 
                            values={props.values}
                            handleChange={props.handleChange}
                            handleBlur={props.handleBlur}
                            />;

    return (
        <div>
            <h1 style={{marginBottom: "20px"}}>Personal Information</h1>
            <Grid container rowSpacing={3} spacing={2}>
                {formContent1}
            </Grid>
        </div>
        )
}

export const AdditionalFormInputCreator2 = (props) => {

    const formContent2 = <FormInputCreator 
                            jsonObject={CONTACT_DATA} 
                            errors={props.errors} 
                            values={props.values}
                            handleChange={props.handleChange}/>;

    return (
        <div>
            <h1 style={{marginBottom: "20px"}}>Contact Information</h1>
            <Grid container rowSpacing={3} spacing={2}>
                {formContent2}
            </Grid>
        </div>
    )
}

export const AdditionalFormInputCreator3 = (props) => {

    const formContent3 = <FormInputCreator 
                            jsonObject={COMPANY_DATA} 
                            errors={props.errors} 
                            values={props.values}
                            handleChange={props.handleChange}/>;

    return (
        <div>
            <h1 style={{marginBottom: "20px"}}>Company Information</h1>
            <Grid container rowSpacing={3} spacing={2}>
                {formContent3}
            </Grid>
        </div>
    )
}
