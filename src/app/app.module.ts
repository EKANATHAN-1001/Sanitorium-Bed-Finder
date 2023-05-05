import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { ListpatientComponent } from './listpatient/listpatient.component';
import { EditpatientComponent } from './editpatient/editpatient.component'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { PatientRegComponent } from './patient-reg/patient-reg.component';
import { BedBookComponent } from './bed-book/bed-book.component';
import { BedUnbookComponent } from './bed-unbook/bed-unbook.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LocationComponent } from './location/location.component'

@NgModule({
  declarations: [
    AppComponent,
    CreatepatientComponent,
    ListpatientComponent,
    EditpatientComponent,
    PatientRegComponent,
    BedBookComponent,
    BedUnbookComponent,
    PatientLoginComponent,
    AdminLoginComponent,
    LocationComponent
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
