import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Guards
import { BasicGuardCanActivate } from './guards/basic.guard';

// Components
import { NotFoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [BasicGuardCanActivate],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
