import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {

  users: Person[] = [
      {
        "givenName": "Wolfy",
        "surName": "Prinne",
        "email": "wprinne0@ed.gov",
        "age": 1,
        "address": "Room 470"
      }, {
        "givenName": "Austin",
        "surName": "Lomen",
        "email": "alomen1@shareasale.com",
        "age": 2,
        "address": "PO Box 2597"
      }, {
        "givenName": "Drucy",
        "surName": "Keitley",
        "email": "dkeitley2@google.de",
        "age": 3,
        "address": "Suite 21"
      }, {
        "givenName": "Eleanora",
        "surName": "Keyzor",
        "email": "ekeyzor3@mozilla.org",
        "age": 4,
        "address": "PO Box 76187"
      }, {
        "givenName": "Josy",
        "surName": "Stummeyer",
        "email": "jstummeyer4@ycombinator.com",
        "age": 5,
        "address": "Room 360"
      }, {
        "givenName": "Felix",
        "surName": "Lawlings",
        "email": "flawlings5@twitpic.com",
        "age": 6,
        "address": "Apt 1231"
      }, {
        "givenName": "Loria",
        "surName": "Snassell",
        "email": "lsnassell6@xrea.com",
        "age": 7,
        "address": "Room 887"
      }, {
        "givenName": "Row",
        "surName": "Bransdon",
        "email": "rbransdon7@edublogs.org",
        "age": 8,
        "address": "Apt 179"
      }, {
        "givenName": "Standford",
        "surName": "Hukins",
        "email": "shukins8@photobucket.com",
        "age": 9,
        "address": "Room 725"
      }, {
        "givenName": "Huntley",
        "surName": "Syder",
        "email": "hsyder9@unc.edu",
        "age": 10,
        "address": "9th Floor"
      }, {
        "givenName": "Georgeta",
        "surName": "Norcott",
        "email": "gnorcotta@studiopress.com",
        "age": 11,
        "address": "Room 1985"
      }, {
        "givenName": "Rosie",
        "surName": "Gynne",
        "email": "rgynneb@hhs.gov",
        "age": 12,
        "address": "PO Box 72555"
      }, {
        "givenName": "Shem",
        "surName": "Dumbellow",
        "email": "sdumbellowc@hatena.ne.jp",
        "age": 13,
        "address": "Room 842"
      }, {
        "givenName": "Derrek",
        "surName": "Rosenbusch",
        "email": "drosenbuschd@bing.com",
        "age": 14,
        "address": "Suite 95"
      }, {
        "givenName": "Eve",
        "surName": "Josephson",
        "email": "ejosephsone@twitpic.com",
        "age": 15,
        "address": "15th Floor"
      }, {
        "givenName": "Evelina",
        "surName": "Colliar",
        "email": "ecolliarf@house.gov",
        "age": 16,
        "address": "12th Floor"
      }, {
        "givenName": "Ansel",
        "surName": "Bosquet",
        "email": "abosquetg@example.com",
        "age": 17,
        "address": "19th Floor"
      }, {
        "givenName": "Josh",
        "surName": "Urion",
        "email": "jurionh@bandcamp.com",
        "age": 18,
        "address": "Room 93"
      }, {
        "givenName": "Kort",
        "surName": "Luckham",
        "email": "kluckhami@admin.ch",
        "age": 19,
        "address": "Apt 798"
      }, {
        "givenName": "Cesar",
        "surName": "O'Hartigan",
        "email": "cohartiganj@rakuten.co.jp",
        "age": 20,
        "address": "Apt 1053"
      }
    ]
}
