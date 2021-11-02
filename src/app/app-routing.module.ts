import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateValidatorComponent } from './candidate-validator/candidate-validator.component';

const routes: Routes = [
  { path: 'candidate-validator', component: CandidateValidatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
