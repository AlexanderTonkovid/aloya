import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'environments/environment';

import { AppComponent } from './app.component';
import { PLComponent } from './productList';

import '../styles/bootstrappage.css';
import '../styles/flexslider.css';
import '../styles/jquery.fancybox.css';
import '../styles/main.css';
import '../styles/bootstrap.min.css';
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ PLComponent ],
  declarations: [
    AppComponent,
    PLComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [environment.ENV_PROVIDERS]
})
export class AppModule {}
