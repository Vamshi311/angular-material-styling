import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { AddNewContactComponent } from './components/add-new-contact/add-new-contact.component';

const routes: Routes = [
 { path: '', component: ContactmanagerAppComponent , children: [ 
    {path: ':id', component: MainContentComponent },
    {path: '', component: MainContentComponent }
  ]},
 { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent,
    NotesComponent,
    AddNewContactComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [UserService]
})
export class ContactmanagerModule { }
