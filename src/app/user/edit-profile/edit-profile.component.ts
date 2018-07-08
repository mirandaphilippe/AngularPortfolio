import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  @Input() user;
  height = 1;
  weight = 70;
  constructor() { }

  ngOnInit() {
  }
  setHeightWeight(type: string, n: number) {
   if (type === 'height') {
    this.height = n;
   }
   if (type === 'weight') {
    this.weight = n;
   }

  }
}
