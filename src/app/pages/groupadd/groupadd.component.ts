import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

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

  constructor(
    public dialogRef: MatDialogRef<GroupaddComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data?: {
      name: string;
      type: string;
      actual: boolean;
      active: boolean;
      quantity: number;
    }
  ) {
    if(data)
     this.form.setValue(data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {}

  hello() {}

  ngOnInit(): void {}
}
