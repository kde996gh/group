import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'app-groupcard',
  templateUrl: './groupcard.component.html',
  styleUrls: ['./groupcard.component.scss']
})
export class GroupcardComponent implements OnInit {
  @Input() group?: Group;
  constructor() { }

  ngOnInit(): void {
    console.log(this.group)
  }

}
