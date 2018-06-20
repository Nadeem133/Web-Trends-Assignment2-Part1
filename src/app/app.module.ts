import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
