import { Component } from '@angular/core';
import { Bed } from '../patients.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-bed-unbook',
  templateUrl: './bed-unbook.component.html',
  styleUrls: ['./bed-unbook.component.css']
})
export class BedUnbookComponent {
  selectedBed: Bed | null = null;
  label:string='';
  generalWardBeds: Bed[] =[];
  icuBeds:Bed[]=[];
  privateRoomBeds: Bed[] =[];
  act: any;
  editForm: any;
  router: any;
  constructor(private patientService:PatientService){}
  confirmBed() {
    // Implement your logic here
    let i:number;
    for(i=0;i<10;i++)
    {
      console.log(i)
      if(this.generalWardBeds[i].selected==true)
      {
        this.generalWardBeds[i].reserved=false;
        this.generalWardBeds[i].selected=false;
        this.patientService.updatebed(this.generalWardBeds[i],this.generalWardBeds[i].id)
      }
      if(this.privateRoomBeds[i].selected==true)
      {
        this.privateRoomBeds[i].reserved=false;
        this.privateRoomBeds[i].selected=false;
        this.patientService.updatebedpr(this.privateRoomBeds[i],this.privateRoomBeds[i].id)
        
      }
      if(this.icuBeds[i].selected==true)
      {
        this.icuBeds[i].reserved=false;
        this.icuBeds[i].selected=false;
        this.patientService.updatebedic(this.icuBeds[i],this.icuBeds[i].id)
      }
    }
  }
  selectBed(bed: Bed) {
   // bed.selected = false;
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
