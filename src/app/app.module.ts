import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatSliderModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
