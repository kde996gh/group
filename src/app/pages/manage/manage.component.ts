import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Group } from 'src/app/models/group';
import { FirebaseCrudService } from 'src/app/services/firebase-crud.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { GroupaddComponent } from '../groupadd/groupadd.component';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  groups: any[] = [];

  displayedColumns: string[] = [
    'name',
    'type',
    'actual',
    'active',
    'quantity',
    'manage',
  ];

  constructor(private afs: FirebaseCrudService, private dialog: MatDialog) {}

  getGroups() {
    this.afs.get('Groups').subscribe((x) => (this.groups = x));
  }

  ngOnInit(): void {
    this.getGroups();
  }

  createNew() {
    const dialogRef = this.dialog.open(GroupaddComponent, {});
    dialogRef.afterClosed().subscribe(
      (group: Group) => {
        if (group?.name) {
          this.afs.add(group);
        }
      },
      (err) => {
        console.warn(err);
      }
    );
  }

  removeGroup(id: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.afs.delete(id);
      }
    });
  }

  editGroup(
    pname: any,
    ptype: any,
    pactual: any,
    pactive: any,
    pquantity: any,
    id: any
  ) {
    const dialogRef = this.dialog.open(GroupaddComponent, {
      data: {
        name: pname,
        type: ptype,
        actual: pactual,
        active: pactive,
        quantity: pquantity,
      },
    });
    dialogRef.afterClosed().subscribe(
      (group: Group) => {
        if (group?.name) {
          this.afs.update(id, group)
        }
      },
      (err) => {
        console.warn(err);
      }
    );
  }
}
