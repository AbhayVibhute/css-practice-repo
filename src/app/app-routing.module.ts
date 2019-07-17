import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { CssComponent } from './css/css.component';

const routes: Routes = [
  { path: 'website', component: WebsiteComponent },
  { path: 'css', component: CssComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
