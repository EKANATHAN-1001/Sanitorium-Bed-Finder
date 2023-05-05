import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent {
  public patientform:FormGroup;
constructor(
  public patientService:PatientService,
  public formbuilder : FormBuilder,
  public router: Router
){
  this.patientform = this.formbuilder.group({
    name:[''],
    disease:['']
  })
}
onsubmit()
{
  this.patientService.createPatient(this.patientform.value);
  this.router.navigate(['list-patient']);
}
}
