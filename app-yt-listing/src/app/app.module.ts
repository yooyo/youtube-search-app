import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
import { YoutubeServiceService } from './youtube-service.service';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { DatepickerModule } from 'angular2-material-datepicker';
import { SelectModule } from 'angular2-select';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { HoverPlayerComponent } from './hover-player/hover-player.component';
import { SafePipe } from './safe.pipe';
import { DatePipe } from '@angular/common';
import { AdvSearchComponent } from './adv-search/adv-search.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HoverPlayerComponent,
    SafePipe,
    AdvSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    YoutubePlayerModule,
    DatepickerModule,
    SelectModule,
    NgbModule.forRoot()
  ],
  providers: [ YoutubeServiceService, DatePipe ],
  bootstrap: [ AppComponent ] 
})
export class AppModule { }
