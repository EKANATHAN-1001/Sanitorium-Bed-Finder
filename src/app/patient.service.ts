import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Bed, PatientReg, Patients } from './patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private angularFirestore:AngularFirestore) { }

  getPatientDoc(Id:any){
    return this.angularFirestore
    .collection('patient-collection')
    .doc(Id)
    .valueChanges()

  }
  getPatientList(){
    return this.angularFirestore
    .collection('patient-collection')
    .snapshotChanges()
  }
  getPatientReg(){
    return this.angularFirestore
    .collection('patient-reg')
    .snapshotChanges()
  }
  createPatient(patient:Patients)
  {

    return new Promise<any>((resolve,reject)=>{
      this.angularFirestore
      .collection('patient-collection')
      .add(patient)
      .then(response=>{console.log(response)},error=>reject(error));
    });
}
updatePatient(patient:Patients,id:any)
{
  return this.angularFirestore
  .collection('patient-collection')
  .doc(id)
  .update({
    name:patient.name,
    disease:patient.disease
  })
}
updatebed(generalWardBeds:Bed,id:any)
{
  return this.angularFirestore
  .collection('generalWardBeds')
  .doc(id)
  .update({
    selected:generalWardBeds.selected,
    reserved:generalWardBeds.reserved
  })
}

updatebedpr(generalWardBeds:Bed,id:any)
{
  return this.angularFirestore
  .collection('privateRoomBeds')
  .doc(id)
  .update({
    selected:generalWardBeds.selected,
    reserved:generalWardBeds.reserved
  })
}
updatebedic(generalWardBeds:Bed,id:any)
{
  return this.angularFirestore
  .collection('icuBeds')
  .doc(id)
  .update({
    selected:generalWardBeds.selected,
    reserved:generalWardBeds.reserved
  })
}
deletePatient(patient:Patients){
  return this.angularFirestore
  .collection('patient-collection')
  .doc(patient.id)
  .delete()
}

patientReg(patient:PatientReg)
{
  return new Promise<any>((resolve,reject)=>{
    this.angularFirestore
    .collection('patient-reg')
    .add(patient)
    .then(response=>{console.log(response)},error=>reject(error));
  });
}
getgeneralWardBeds(){
  return this.angularFirestore
  .collection('generalWardBeds')
  .snapshotChanges()
}
getprivateRoomBeds(){
  return this.angularFirestore
  .collection('privateRoomBeds')
  .snapshotChanges()
}
geticuBeds(){
  return this.angularFirestore
  .collection('icuBeds')
  .snapshotChanges()
}
}