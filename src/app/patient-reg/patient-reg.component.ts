import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-patient-reg',
  templateUrl: './patient-reg.component.html',
  styleUrls: ['./patient-reg.component.css']
})
export class PatientRegComponent {
  patient = {
    name: '',
    age: '',
    gender:'',
    phone:''
  };
public patientform:FormGroup;
constructor(
  public patientService:PatientService,
  public formbuilder : FormBuilder,
  public router: Router
){
  this.patientform = this.formbuilder.group({
    name:[''],
    age:[''],
    gender:[''],
    phone:['']
  })
}
onsubmit()
{
  this.patientService.patientReg(this.patientform.value);
  this.router.navigate(['list-patient']);
}
}
