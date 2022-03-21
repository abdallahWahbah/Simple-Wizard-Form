import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Box } from '@mui/material'

const CompanyDetails = () => {

  const company = useSelector(state => state.company.company);

  if(Object.keys(company).length === 0) 
  {
    return <div style={{fontSize: "20px", padding: "50px"}}>No data to preview</div>
  }

  const tableHeadNames = ["Owner name", 
                          "Gender", 
                          "Phone number",
                          "Email",
                          "Education",    
                          "Date of birth",
                          "Company name",
                          "Company city",
                          "Commercial number",
                          "License type",
  ]

  const tableBodyIDs =["first-name",
                        "radio-buttons-group",// gender
                        "phone-number",
                        "email",
                        "education",
                        "date-of-birth",
                        "company-name",
                        "city-name",
                        "commercial-registeration-number",
                        "license-type",
  ]
  return (
    <React.Fragment>
      <div style={{backgroundImage:"linear-gradient(to left, rgba(255, 255, 255, .1), rgba(0, 0, 0, .1))", padding: "20px", margin: "50px"}}>
        <Typography variant="h5" component="div" gutterBottom>
            Company Details
        </Typography>
          
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {tableHeadNames?.map((head, index) =>(
              <Grid item xs={6} key={head}>
                <Box sx={{background:"transparent", boxShadow: "none", textAlign: "left"}}>
                    {/* <h4>{head}</h4> */}
                    <Typography variant="subtitle1" gutterBottom component="div" sx={{color: "#757575"}}>
                      {head}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                      {company[tableBodyIDs[index]] || "....."}
                    </Typography>
                    {/* <div style={{fontWeight: "bold", color: "black"}}>{company[tableBodyIDs[index]]}</div> */}
                </Box>
            </Grid>
            ))}
        </Grid>
      </div>
  </React.Fragment>
  )
}

export default CompanyDetails