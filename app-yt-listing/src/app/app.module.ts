import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { YoutubeServiceService } from './youtube-service.service'
import 'rxjs/Rx';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { HoverPlayerComponent } from './hover-player/hover-player.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HoverPlayerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ YoutubeServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
