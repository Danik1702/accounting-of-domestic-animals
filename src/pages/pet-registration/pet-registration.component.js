import React from "react";

import { PetRegistrationHeader } from './components/pr-header/pr-header.component';
import { PetRegistrationForm } from './components/pr-form/pr-form.component';

import './pet-registration.styles.css';

export const PetRegistration = () => {
  return (
    <div className="pr-wrapper">
      <PetRegistrationHeader />
      <PetRegistrationForm />
    </div>
  );
};
