import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactComponentDirective } from './directives/reactng';
import { CustomshapeComponent } from './components/customshape/customshape.component';
import { createCustomElement } from '@angular/elements';
import { HelloDialogComponent } from './components/hellodialog/hellodialog.component';

@NgModule({
  declarations: [AppComponent, CustomshapeComponent],
  imports: [BrowserModule, ReactComponentDirective, HelloDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const tlstateElement = createCustomElement(CustomshapeComponent, {
      injector,
    });
    customElements.define('app-customshape', tlstateElement);
  }
}
