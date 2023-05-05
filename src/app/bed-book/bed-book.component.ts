import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Bed } from '../patients.model';

@Component({
  selector: 'app-bed-book',
  templateUrl: './bed-book.component.html',
  styleUrls: ['./bed-book.component.css']
})
export class BedBookComponent {
  label:string='';
  selectedBed: Bed | null = null;
  generalWardBeds: Bed[] =[];
  privateRoomBeds: Bed[] =[];
  icuBeds: Bed[] =[];
  act: any;
  editForm: any;
  router: any;
  constructor(private patientService:PatientService){}
  confirmBed() {
    // Implement your logic here
    let i:number;
    for(i=0;i<10;i++)
    {
      if(this.generalWardBeds[i].selected==true)
      {
        this.generalWardBeds[i].reserved=true;
        this.generalWardBeds[i].selected=false;
        this.patientService.updatebed(this.generalWardBeds[i],this.generalWardBeds[i].id)
      }
      if(this.privateRoomBeds[i].selected==true)
      {
        this.privateRoomBeds[i].reserved=true;
        this.privateRoomBeds[i].selected=false;
        this.patientService.updatebedpr(this.privateRoomBeds[i],this.privateRoomBeds[i].id)
      }
      if(this.icuBeds[i].selected==true)
      {
        this.icuBeds[i].reserved=true;
        this.icuBeds[i].selected=false;
        this.patientService.updatebedic(this.icuBeds[i],this.icuBeds[i].id)
      }
    }
    this.router.navigate(['list-patient'])
  
  }
  selectBed(bed: Bed) {
    //bed.selected = true;
  bed.selected=!bed.selected;
  }
ngOnInit()
{
  this.patientService.getgeneralWardBeds().subscribe(res=>{
    this.generalWardBeds = res.map(e=>{
      return {
        id:e.payload.doc.id,
        ...e.payload.doc.data() as{}
      } as Bed;
    })
  })
  this.patientService.getprivateRoomBeds().subscribe(res=>{
    this.privateRoomBeds = res.map(e=>{
      return {
        id:e.payload.doc.id,
        ...e.payload.doc.data() as{}
      } as Bed;
    })
  })

  this.patientService.geticuBeds().subscribe(res=>{
    this.icuBeds = res.map(e=>{
      return {
        id:e.payload.doc.id,
        ...e.payload.doc.data() as{}
      } as Bed;
    })
  })  
  
}
}
