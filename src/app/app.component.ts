import { Component } from '@angular/core';
import { Group } from './models/group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'group';

  group: Group;

  constructor() {
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
}
