import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloComponent],
  exports: [HelloComponent],
  providers: [
    /* Don't add the services here */
  ]
})
export class NgCesiumModule {
  static forRoot() {
    return {
      ngModule: NgCesiumModule,
      providers: [
        /* SomeService */
      ]
    };
  }
}
