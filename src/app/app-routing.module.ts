import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'create', component: CreateComponent },
  {path: 'update', component: UpdateComponent },
  {path: 'delete', component: DeleteComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
