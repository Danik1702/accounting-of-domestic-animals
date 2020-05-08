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

import { ROUTES } from './shared/constants/routes.constants';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route to={ROUTES.landing} exact component={Landing} />
        <Route to={ROUTES.careCheck} exact component={CareCheck} />
        <Route to={ROUTES.losePet} exact component={LosePet} />
        <Route to={ROUTES.petFinder} exact component={PetFinder} />
        <Route to={ROUTES.petProfile} exact component={PetProfile} />
        <Route to={ROUTES.petRegistration} exact component={PetRegistration} />
        <Route to={ROUTES.shelter} exact component={Shelter} />
        <Route to={ROUTES.userProfile} exact component={UserProfile} />
        <Route to={ROUTES.userRegistration} exact component={UserRegistration} />
        <Route to={ROUTES.vanishedPetProfile} exact component={VanishedPetProfile} />
        <Route to={ROUTES.vanishedPets} exact component={VanishedPets} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
