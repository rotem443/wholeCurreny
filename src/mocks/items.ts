import { Injectable } from '@angular/core';

import { Item } from '../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/imgs/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Burt Bear",
        "profilePic": "assets/imgs/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/imgs/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/imgs/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/imgs/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/imgs/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/imgs/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/imgs/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }
}
