import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { ListpatientComponent } from './listpatient/listpatient.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { PatientRegComponent } from './patient-reg/patient-reg.component';
import { BedUnbookComponent } from './bed-unbook/bed-unbook.component';
import { BedBookComponent } from './bed-book/bed-book.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path:'',redirectTo:'/create',pathMatch:'full'},
  {path:'create',component: CreatepatientComponent},
  {path:'list-patient',component: ListpatientComponent},
  {path:'update-patient/:id',component:EditpatientComponent},
  {path:'patient-reg',component:PatientRegComponent},
  {path:'bed-unbook',component:BedUnbookComponent},
  {path:'bed-book',component:BedBookComponent},
  {path:'patient-login',component:PatientLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'app-location',component:LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
