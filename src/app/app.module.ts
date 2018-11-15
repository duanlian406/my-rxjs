import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRouteModule } from './app-route/app-route.module';
import { FuntionReactiveProgrammingComponent } from './funtion-reactive-programming/funtion-reactive-programming.component';
import { TimeTestComponent } from './funtion-reactive-programming/time-test/time-test.component';
import { RxjsAbcComponent } from './rxjs-abc/rxjs-abc.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { CreateSourceComponent } from './create-source/create-source.component';
import { RxjsGenerateComponent } from './create-source/rxjs-generate/rxjs-generate.component';
import { CombineSourceComponent } from './combine-source/combine-source.component';
import { AssistOperatorsComponent } from './assist-operators/assist-operators.component';
import { FilterOperatorsComponent } from './filter-operators/filter-operators.component';
import { TransformOperatorsComponent } from './transform-operators/transform-operators.component';
import { ErrorOperatorsComponent } from './error-operators/error-operators.component';
import { MulticastOperatorsComponent } from './multicast-operators/multicast-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FuntionReactiveProgrammingComponent,
    TimeTestComponent,
    RxjsAbcComponent,
    RxjsOperatorsComponent,
    CreateSourceComponent,
    RxjsGenerateComponent,
    CombineSourceComponent,
    AssistOperatorsComponent,
    FilterOperatorsComponent,
    TransformOperatorsComponent,
    ErrorOperatorsComponent,
    MulticastOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
