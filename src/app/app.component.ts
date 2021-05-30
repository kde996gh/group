import { Component, OnInit } from '@angular/core';
import { Group } from './models/group';
import { FirebaseCrudService } from './services/firebase-crud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
}
