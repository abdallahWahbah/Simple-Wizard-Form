import * as yup from 'yup';

export const PERSONAL_DATA = 
[
    {
        name: "first-name",
        type: "text",
        fullWidth: "fullWidth",
        label: "First Name",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        validator: yup.string().min(2).required("First Name can't be empty")
    },
    {
        name: "last-name",
        type: "text",
        fullWidth: "fullWidth",
        label: "Last Name",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        // validator: yup.string().min(2).required("Last Name can't be empty")
    },
    {
        name: "date-of-birth",
        type:"date",
        label: "Date Of Birth",
        sx: {width: "100%", marginBottom: "20px"},
        shrink: true,
        initialValue: "",
    },
    {
        name: "education",
        inputId: "demo-simple-select-label",
        label: "Education",
        selectId: "demo-simple-select",
        initialValue: "",
        // validator: yup.string().required("Choose your education"),
        options: 
        [
            {
                value: "BSC",
                title: "BSC"
            },
            {
                value: "Master",
                title: "Master"
            },
            {
                value: "PHD",
                title: "PHD"
            },
        ]
    },
    {
        name: "radio-buttons-group", // for gender
        labelId: "demo-radio-buttons-group-label",
        label: "Gender",
        ariaLabel: "demo-radio-buttons-group-label",
        initialValue: "",
        validator: yup.string().required("Choose Gender"),
        options:
        [
            {
                value: "male",
                label: "Male"
            },
            {
                value: "female",
                label: "Female"
            },
            {
                value: "others",
                label: "Others"
            }
        ]
    },
    
];

export const CONTACT_DATA=
[
    {
        name: "phone-number",
        type: "number",
        fullWidth: "fullWidth",
        label: "Phone Number",
        sx: {marginBottom: "20px"},
        initialValue: "",
        validator: yup.number().positive().required("Phone Number can't be empty")
    },
    {
        name: "email",
        type: "email",
        fullWidth: "fullWidth",
        label: "Email",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        validator: yup.string().email("email must be valid").required("Last Name can't be empty")
    },
    {
        name:'extra-number',
        type: "number",
        fullWidth: "fullWidth",
        label: "Extra Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
    },
    {
        name:'postal-code',
        type: "number",
        fullWidth: "fullWidth",
        label: "Postal Code",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        // validator: yup.number().required("Postal Code can't be empty")
    },
]

export const COMPANY_DATA =
[
    {
        name: "company-name",
        type: "text",
        fullWidth: "fullWidth",
        label: "Company Name",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        validator: yup.string().min(1).required("Company name can't be empty")
    },
    {
        name: "city-name",
        type: "text",
        fullWidth: "fullWidth",
        label: "City",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        validator: yup.string().min(1).required("City can't be empty")
    },
    {
        name: "street-name",
        type: "text",
        fullWidth: "fullWidth",
        label: "Street Name",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        // validator: yup.string().min(1).required("Street name can't be empty")
    },
    {
        name:'district-number',
        type: "number",
        fullWidth: "fullWidth",
        label: "District Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        // validator: yup.number().required("District Number can't be empty")
    },
    {
        name:'building-number',
        type: "number",
        fullWidth: "fullWidth",
        label: "Building Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        // validator: yup.number().required("Building Number can't be empty")
    },
    {
        name:'commercial-registeration-number',
        type: "number",
        fullWidth: "fullWidth",
        label: "Commercial Registeration Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        validator: yup.string().required("Commercial Number can't be empty")
    },
    {
        name: "commissioner-phone-number",
        type: "number",
        fullWidth: "fullWidth",
        label: "Commissioner Phone Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        // validator: yup.number().positive().required("Commissioner Phone Number can't be empty")
    },
    {
        name: "license-type",
        labelId: "demo-simple-select-label",
        sx: {marginBottom: "20px"},
        selectId: "demo-simple-select",
        label: "License Type",
        initialValue: "",
        validator: yup.string().required("Choose License Type"),
        options: 
        [
            {
                value: "type-1",
                title: "type 1"
            },
            {
                value: "type-2",
                title: "type 2"
            },
            {
                value: "type-3",
                title: "type 3"
            },
        ]
    },
]


// export const Page4=
// [
//     {
//         name: "table",
//         rows:
//         [
//             {
//                 title: "Radio Button 1",
//                 options:
//                 [
//                     {
//                         value: "Male",
//                         name: "radio1",
//                         inputProps:{ 'aria-label': 'A' }
//                     },
//                     {
//                         value: "Female",
//                         name: "radio1",
//                         inputProps:{ 'aria-label': 'B' }
//                     },
//                     {
//                         value: "Both",
//                         name: "radio1",
//                         inputProps:{ 'aria-label': 'C' }
//                     }
//                 ]
//             },
//             {
//                 title: "Radio Button 2",
//                 options:
//                 [
//                     {
//                         value: "Male",
//                         name: "radio2",
//                         inputProps:{ 'aria-label': 'A' }
//                     },
//                     {
//                         value: "Female",
//                         name: "radio2",
//                         inputProps:{ 'aria-label': 'B' }
//                     },
//                     {
//                         value: "Both",
//                         name: "radio2",
//                         inputProps:{ 'aria-label': 'C' }
//                     }
//                 ]
//             },
//             {
//                 title: "Radio Button 3",
//                 options:
//                 [
//                     {
//                         value: "Male",
//                         name: "radio3",
//                         inputProps:{ 'aria-label': 'A' }
//                     },
//                     {
//                         value: "Female",
//                         name: "radio3",
//                         inputProps:{ 'aria-label': 'B' }
//                     },
//                     {
//                         value: "Both",
//                         name: "radio3",
//                         inputProps:{ 'aria-label': 'C' }
//                     }
//                 ]
//             }
//         ]
//     }
// ]