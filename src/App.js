import React from "react";
import "@fontsource/poppins"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpgradCareerPage from "./pages/upgrad-career-page";
import Success from "./pages/success.jsx";
import UserInformationShowStep5 from "./pages/user-information-show-step5.jsx";
import CareerAssessment4 from "./pages/user-information-show-step6-4";
import CareerAssessment5 from "./pages/user-information-show-step6-5.jsx";
import CareerAssessment3 from "./pages/user-information-show-step6-3.jsx";
import CareerAssessment2 from "./pages/user-information-show-step6-2.jsx";
import CareerAssessment1 from "./pages/user-information-show-step6-1.jsx";
import Userinformationshowstep3 from "./pages/user-information-show-step3.jsx";
import Userinformationshowstep4 from "./pages/user-information-show-step4.jsx";
import StepFormOne from "./pages/StepFormOne/StepFormOne.js";
import PageOne from './pages/pdfPages/pageone.js';
import EducationalDetails from './pages/EducationalDetails/EducationalDetails.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/upgrad-career-page" element={<UpgradCareerPage />} />
          <Route path="/user-information-show-step3" element={<Userinformationshowstep3 />} /> 
          <Route path="/user-information-show-step4" element={<Userinformationshowstep4 />} />
          <Route path="/user-information-show-step5" element={<UserInformationShowStep5 />} />
          <Route path="/user-information-show-step6-1" element={<CareerAssessment1 />} />
          <Route path="/user-information-show-step6-2" element={<CareerAssessment2 />} />
          <Route path="/user-information-show-step6-3" element={<CareerAssessment3 />} />
          <Route path="/user-information-show-step6-4" element={<CareerAssessment4 />} />
          <Route path="/user-information-show-step6-5" element={<CareerAssessment5 />} />
          <Route path="/success" element={<Success />} />
          <Route path="/pageone" element={<PageOne/>}/>
          <Route path="/step-from-one"element={<StepFormOne/>}/>
          <Route path="/educationaldetails" element={<EducationalDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

