import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-material-dropdown',
  templateUrl: './material-dropdown.component.html',
  styleUrls: ['./material-dropdown.component.css']
})
export class MaterialDropdownComponent implements OnInit {
  
  @Input() data;
  @Input() placeHolder;

  constructor() { }

  ngOnInit() {
  }

}
