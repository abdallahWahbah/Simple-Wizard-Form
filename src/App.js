import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';

import Header from './Components/Header/Header';
import WizardForm from './Components/WizardForm';
import CompanyDetails from './Components/CompanyDetails';
import './App.css';

const App = () => 
{
    return (
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/table"/>} />
          <Route path="/details" element={<CompanyDetails />} />
          <Route path="/new" element={<WizardForm />}/>
        </Routes>
      </React.Fragment>  
    )
}

export default App