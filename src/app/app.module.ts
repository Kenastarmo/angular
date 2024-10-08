import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';  // Uvezi HeaderModule
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],  // Samo AppComponent ide ovde
  imports: [BrowserModule, HeaderModule, CommonModule],  // HeaderModule ide u imports
  exports: [HeaderModule],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule {}