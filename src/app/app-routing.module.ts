import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'view-rooms', loadChildren: './view-rooms/view-rooms.module#ViewRoomsPageModule' },
  { path: 'modalx', loadChildren: './modalx/modalx.module#ModalxPageModule' },
  { path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },
  { path: 'ahotel', loadChildren: './ahotel/ahotel.module#AhotelPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
