import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cases',
    pathMatch: 'full'
  },
  {
    path: 'cases',
    loadChildren: () => import('./cases/cases.module').then( m => m.CasesPageModule)
  },
  {
    path: 'case1',
    loadChildren: () => import('./case1/case1.module').then( m => m.Case1PageModule)
  },
  {
    path: 'case2',
    loadChildren: () => import('./case2/case2.module').then( m => m.Case2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
