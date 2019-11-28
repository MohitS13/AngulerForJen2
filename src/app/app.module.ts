import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ContactComponent } from './contact/contact.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { HttpClientModule } from '@angular/common/http';
import {NgModel, FormsModule, NgForm} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DeleteComponent,
    EditComponent,
    ContactComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"emps/111",component:HomeComponent},
      {path:"register",component:RegisterComponent},
      {path:"edit/:No",component:EditComponent},
      {path:"delete/:No",component:DeleteComponent},
      {path:"contact",component:ContactComponent},
      {path:"**",component:NoFoundComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
