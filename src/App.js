import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CareCheck } from './pages/care-check/care-check.component';
import { Landing } from './pages/landing/landing.component';
import { LosePet } from './pages/lose-pet/lose-pet.component';
import { PetFinder } from './pages/pet-finder/pet-finder.component';
import { PetProfile } from './pages/pet-profile/pet-profile.component';
import { PetRegistration } from './pages/pet-registration/pet-registration.component';
import { Shelter } from './pages/shelter/shelter.component';
import { UserProfile } from './pages/user-profile/user-profile.component';
import { UserRegistration } from './pages/user-registration/user-registration.component';
import { VanishedPetProfile } from './pages/vanished-pet-profile/vanished-pet-profile.component';
import { VanishedPets } from './pages/vanished-pets/vanished-pets.component';
import { ReportMissing } from './pages/report-missing/report-missing.component';
import { CareCheckResult } from './pages/care-check-result/care-check-result.component';

import { ROUTES } from './shared/constants/routes.constants';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.landing} exact component={Landing} />
        <Route path={ROUTES.careCheck} exact component={CareCheck} />
        <Route path={ROUTES.careCheckResult} exact component={CareCheckResult} />
        <Route path={ROUTES.losePet} exact component={LosePet} />
        <Route path={ROUTES.petFinder} exact component={PetFinder} />
        <Route path={ROUTES.petProfile} exact component={PetProfile} />
        <Route path={ROUTES.petRegistration} exact component={PetRegistration} />
        <Route path={ROUTES.shelter} exact component={Shelter} />
        <Route path={ROUTES.userProfile} exact component={UserProfile} />
        <Route path={ROUTES.userRegistration} exact component={UserRegistration} />
        <Route path={ROUTES.vanishedPetProfile} exact component={VanishedPetProfile} />
        <Route path={ROUTES.vanishedPets} exact component={VanishedPets} />
        <Route path={ROUTES.reportMissing} exact component={ReportMissing} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
