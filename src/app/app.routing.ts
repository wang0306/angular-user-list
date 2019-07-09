import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', loadChildren: './pages/user/user.module#UserModule' }
    ],
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
