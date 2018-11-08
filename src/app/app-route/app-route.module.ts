import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FuntionReactiveProgrammingComponent } from '../funtion-reactive-programming/funtion-reactive-programming.component';
import { RxjsAbcComponent } from '../rxjs-abc/rxjs-abc.component';
import { RxjsOperatorsComponent } from '../rxjs-operators/rxjs-operators.component';
import { CreateSourceComponent } from '../create-source/create-source.component';
import { CombineSourceComponent } from '../combine-source/combine-source.component';
import { AssistOperatorsComponent } from '../assist-operators/assist-operators.component';
import { FilterOperatorsComponent } from '../filter-operators/filter-operators.component';
import { TransformOperatorsComponent } from '../transform-operators/transform-operators.component';
import { ErrorOperatorsComponent } from '../error-operators/error-operators.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'one', component: FuntionReactiveProgrammingComponent },
  { path: 'two', component: RxjsAbcComponent },
  { path: 'three', component: RxjsOperatorsComponent },
  { path: 'four', component: CreateSourceComponent },
  { path: 'five', component: CombineSourceComponent },
  { path: 'six', component: AssistOperatorsComponent },
  { path: 'seven', component: FilterOperatorsComponent },
  { path: 'eight', component: TransformOperatorsComponent },
  { path: 'night', component: ErrorOperatorsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRouteModule { }
