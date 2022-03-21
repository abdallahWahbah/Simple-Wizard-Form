import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { FormikWizard } from "formik-wizard-form";

import {AdditionalFormInputCreator1, 
        AdditionalFormInputCreator2,
        AdditionalFormInputCreator3,} from './AdditionalFormInputCreator';
import InitialValuesValidators from "../Inputs/InitialValuesValidators";
import { PERSONAL_DATA, CONTACT_DATA, COMPANY_DATA } from "../Inputs/Schema";
import { companyActions } from "../store/CompanySlice";
import { useDispatch } from "react-redux";

const WizardForm = (props) => {
    
    const [finalValues, setFinalValues] = React.useState({});
    const [finished, setFinished] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues1 = InitialValuesValidators("initialValues", PERSONAL_DATA).initialValues;
    const initialValues2 = InitialValuesValidators("initialValues", CONTACT_DATA).initialValues;
    const initialValues3 = InitialValuesValidators("initialValues", COMPANY_DATA).initialValues;
    
    const validator1 = yup.object(InitialValuesValidators("validators", PERSONAL_DATA).validators);
    const validator2 = yup.object(InitialValuesValidators("validators", CONTACT_DATA).validators);
    const validator3 = yup.object(InitialValuesValidators("validators", COMPANY_DATA).validators);
    
    const initialValues = {...initialValues1, 
                            ...initialValues2, 
                            ...initialValues3,};
    

    const onSubmit = values =>
    {
        // setFinalValues(values);
        setFinished(true);
        dispatch(companyActions.createCompany(values));
        navigate("/details")
    }

    return (
        <div style={{padding: "50px"}}>
            <FormikWizard
                initialValues={initialValues}
                onSubmit={onSubmit}
                validateOnNext
                activeStepIndex={0}
                steps={[
                {
                    component: AdditionalFormInputCreator1,
                    validationSchema: validator1,
                },
                {
                    component: AdditionalFormInputCreator2,
                    validationSchema: validator2,
                },
                {
                    component: AdditionalFormInputCreator3,
                    validationSchema: validator3
                },
                ]}
            >
                {({currentStepIndex, renderComponent, handlePrev, handleNext, isNextDisabled, isPrevDisabled}) => {
                return (
                    <>
                    <Box sx={{ width: "100%", my: "1rem" }}>
                        <Stepper activeStep={currentStepIndex}>
                        <Step completed={currentStepIndex > 0}>
                            <StepLabel>Personal Information</StepLabel>
                        </Step>
                        <Step completed={currentStepIndex > 1}>
                            <StepLabel>Contact Information</StepLabel>
                        </Step>
                        <Step completed={finished}>
                            <StepLabel>Company Information</StepLabel>
                        </Step>
                        </Stepper>
                    </Box>
                    <Box my="2rem">{renderComponent()}</Box>
                    <Box display="flex" justifyContent="space-between">
                        <Button
                            variant="contained"
                            disabled={isPrevDisabled}
                            type="primary"
                            onClick={handlePrev}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="contained"
                            disabled={isNextDisabled}
                            type="primary"
                            onClick={handleNext}
                        >
                            {currentStepIndex === 2 ? "Finish" : "Next"}
                        </Button>
                    </Box>
                    {/* <Box>
                        <pre>{JSON.stringify(finalValues, null, 2)}</pre>
                    </Box> */}
                    </>
                );
                }}
            </FormikWizard>
        </div>
    );

};

export default WizardForm;