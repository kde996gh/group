import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Group } from 'src/app/models/group';
import { FirebaseCrudService } from 'src/app/services/firebase-crud.service';
import { GroupaddComponent } from '../groupadd/groupadd.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  groups: any[] = [];

  displayedColumns: string[] = ['name', 'type', 'actual', 'active', 'quantity', "manage"];


  constructor(private afs: FirebaseCrudService, private dialog: MatDialog) {}

  getGroups() {
   this.afs.get('Groups').subscribe((x) => (this.groups = x));
  }

  ngOnInit(): void {
    this.getGroups();
  }

  createNew(){
    const dialogRef = this.dialog.open(GroupaddComponent, {});
    dialogRef.afterClosed().subscribe((group: Group) => {
      if (group?.name) {
        this.afs.add(group);
      }
    }, err => {
      console.warn(err);
    });
  }

  removeGroup(id: any){
    this.afs.delete(id);
  }

  editGroup(){
    
    const dialogRef = this.dialog.open(GroupaddComponent, {});

  }

}
