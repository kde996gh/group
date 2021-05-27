import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-groupadd',
  templateUrl: './groupadd.component.html',
  styleUrls: ['./groupadd.component.scss'],
})
export class GroupaddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl(''),
    actual: new FormControl(''),
    active: new FormControl(''),
    quantity: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<GroupaddComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }



  ngOnInit(): void {}
}
