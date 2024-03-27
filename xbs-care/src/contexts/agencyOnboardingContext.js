import { React, createContext, useRef, useState } from "react";
export const agencyStepContext = createContext();

const AgencyOnboardingContext = ({ ...props }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAgreementAccepted, setIsAgreementAccepted] = useState(false);
  const [agencyData, setAgencyData] = useState([]);
  const stepperRef = useRef(null);
  const scrollToStepper = () => {
    if (stepperRef.current) {
      stepperRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  console.log("AgencyOnboardingContext -initial - activeStep " + activeStep);
  return (
    <div>
      <agencyStepContext.Provider
        value={{
          activeStep,
          setActiveStep,
          isCompleted,
          setIsCompleted,
          agencyData,
          setAgencyData,
          stepperRef,
          scrollToStepper,
          isAgreementAccepted,
          setIsAgreementAccepted,
        }}
      >
        {props.children}
      </agencyStepContext.Provider>
    </div>
  );
};

export default AgencyOnboardingContext;
