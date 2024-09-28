import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './form/contact/contact.component';
import { CreateComponent } from './form/create/create.component';
import { EditComponent } from './form/edit/edit.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'form/contact', component: ContactComponent },
  { path: 'form/create', component: CreateComponent },
  { path: 'form/edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
