import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import {FormGroup,FormBuilder} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css']
})
export class EditpatientComponent {
public editForm : FormGroup;
patientId:any;
constructor(

  public patientService: PatientService,
  public formBuilder:FormBuilder,
  public act:ActivatedRoute,
  private router:Router

){
  this.editForm=this.formBuilder.group({
    name:[''],
    disease:['']
  })
}
ngOnInit():void{
  const id =this.act.snapshot.paramMap.get('id');
  this.patientService.getPatientDoc(id).subscribe(res=>{
    this.patientId=res;
    this.editForm=this.formBuilder.group({
      name:[this.patientId.name],
      disease:[this.patientId.disease]
    })
  })
}
onsubmit()
  {const id =this.act.snapshot.paramMap.get('id');
  this.patientService.updatePatient(this.editForm.value,id)
  this.router.navigate(['list-patient'])
  

  }

}
