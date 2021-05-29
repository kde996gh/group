import { Component, OnInit } from '@angular/core';
import { FirebaseCrudService } from 'src/app/services/firebase-crud.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
  groups: any[] = [];

  displayedColumns: string[] = ['name', 'type', 'actual', 'active', 'quantity'];


  constructor(private afs: FirebaseCrudService) {}

  getGroups() {
   this.afs.get('Groups').subscribe((x) => (this.groups = x));
  }

  ngOnInit(): void {
    this.getGroups();
  }
}
