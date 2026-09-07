import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
  path: 'about',
  component: About,
  children: [
    {
      path: 'team',
      component: Home
    }
  ]
},
{
  path: 'services',
  loadChildren: () =>
    import('./services/services.routes').then(
      (m) => m.servicesRoutes
    )
},
{
  path: 'contact',
  loadComponent: () =>
    import('./contact/contact').then(
      (m) => m.Contact
    )
}
];