import { Component } from '@angular/core';
import { Patients } from '../patients.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-listpatient',
  templateUrl: './listpatient.component.html',
  styleUrls: ['./listpatient.component.css']
})
export class ListpatientComponent {
patient: Patients[]=[];
constructor(private patientService:PatientService){}
ngOnInit()
{
  this.patientService.getPatientList().subscribe(res=>{
    this.patient = res.map(e=>{
      return {
        id:e.payload.doc.id,
        ...e.payload.doc.data() as{}
      } as Patients;
    })
  })
}
removepatient (patient:any){
  if(confirm('are you sure to delete'+patient.name)){
    this.patientService.deletePatient(patient)
  }
}
}
