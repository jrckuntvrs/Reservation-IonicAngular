import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./menu/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'reservation',
    loadChildren: () =>
      import('./reservation/reservation.module').then(
        (m) => m.ReservationPageModule
      ),
  },
  {
    path: 'date-time',
    loadChildren: () =>
      import('./date-time/date-time.module').then((m) => m.DateTimePageModule),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'head',
    loadChildren: () =>
      import('./head/head.module').then((m) => m.HeadPageModule),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms.module').then((m) => m.FormsPageModule),
  },

  {
    path: 'blessingform',
    loadChildren: () =>
      import('./blessingform/blessingform.module').then(
        (m) => m.BlessingformPageModule
      ),
  },
  {
    path: 'serviceform',
    loadChildren: () =>
      import('./serviceform/serviceform.module').then(
        (m) => m.ServiceformPageModule
      ),
  },
  {
    path: 'baptismform',
    loadChildren: () =>
      import('./baptismform/baptismform.module').then(
        (m) => m.BaptismformPageModule
      ),
  },
  {
    path: 'birthdayform',
    loadChildren: () =>
      import('./birthdayform/birthdayform.module').then(
        (m) => m.BirthdayformPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
