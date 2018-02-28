import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgCesiumModule } from './ng-cesium/ng-cesium.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgCesiumModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
