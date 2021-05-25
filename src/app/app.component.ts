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
  title = 'group';

  group: Group;

   groups: Observable<Group[]> | null = null;

  //groups: Array<Group> |null = null;
  /*
  saveData() {
    this.afs
      .collection('Groups')
      .add(this.group)
      .then((res) => {
        console.log('Mentés sikeres!');
      })
      .catch((error) => {
        console.log('Hiba történt!');
      });
  }*/

  getGroups() {
    this.groups = this.afs.get('Groups');
    console.log(this.groups);
  }


  //tesztelés jellegű
readData(){
  console.log(this.groups )
}

  /*

  testFill() {
    this.groups = [
      { name: 'asd', type: 'animal', actual: false },
      { name: 'asd', type: 'animal', actual: false },
      { name: 'asd', type: 'animal', actual: false },
    ];
  }
*/
  /*
  readData(){
    this.afs.collection("Groups")
    .get().subscribe(res => {
      res.docs.forEach(el => {
        console.log(el.data())
      })
    }, error =>{
      console.log("Olvasási hiba!", error)
    })
  }
*/
  constructor(private afs: FirebaseCrudService) {
    this.group = {
      resourceType: 'Group',
      id: 'example-patientlist',
      text: {
        status: 'additional',
        div:
          '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>All patients primarily attributed to Practitioner 123</p>\n    </div>',
      },
      type: 'person',
      actual: true,
      characteristic: [
        {
          code: {
            coding: [
              {
                system: 'http://example.org',
                code: 'attributed-to',
              },
            ],
            text: 'Patients primarily attributed to',
          },
          value: {
            reference: 'Practitioner/123',
          },
          exclude: false,
        },
      ],
    };
  }
  ngOnInit(): void {
    this.getGroups();
  }
}
