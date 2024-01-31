import {RouterModule, Routes} from '@angular/router';
import {StandardInputComponent} from "./standard-input/standard-input.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: 'standard', component: StandardInputComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
