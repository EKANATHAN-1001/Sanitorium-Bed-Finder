import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { PatientReg } from '../patients.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
  patientl = {
    name: '',
    phone:''
  };
  patient:PatientReg[]=[];
  constructor(
    private patientService:PatientService,
    private router:Router
    ){}
  ngOnInit()
  {  this.patientService.getPatientReg().subscribe(res=>{
    this.patient = res.map(e=>{
      return {
        id:e.payload.doc.id,
        ...e.payload.doc.data() as{}
      } as PatientReg;
    })
  })}
Login()
{
  for(let i:number=0;i<this.patient.length;i++)
  {
    if(this.patient[i].name===this.patientl.name && this.patient[i].phone.toString()===this.patientl.phone)
    {
      alert("Login Successfull!");
      this.router.navigate(['bed-book'])
      return;
    }

  }
  alert('Invalid Login')
}
}
