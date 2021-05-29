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
    actual: new FormControl(false),
    active: new FormControl(false),
    quantity: new FormControl(0, [
      Validators.required,
      Validators.pattern(/[0-9\+\-\ ]/),
    ]),
  });

  types = [
    'Person',
    'Animal',
    'Practitioner',
    'Device',
    'Medication',
    'Substance',
  ];

  constructor(
    public dialogRef: MatDialogRef<GroupaddComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data?: {
      name: string;
      type: string;
      actual: string;
      active: string;
      quantity: number;
    }
  ) {
    if (data) {
      //azért kell az ellenőrzés és uj data object mert stringként jön az input
      const gr = {
        name: data.name,
        type: data.type,
        actual: data.actual == 'true' ? true : false,
        active: data.active == 'true' ? true : false,
        quantity: data.quantity,
      };
      this.form.setValue(gr);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {}

  hello() {}

  ngOnInit(): void {}
}
