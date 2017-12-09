import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentItems: Item[];
  grid: Array<Array<Item>>;
  //perRow: 2;
  
    constructor(public navCtrl: NavController, public items: Items) {
      this.currentItems = this.items.query();
      this.grid = Array(Math.ceil(this.currentItems.length/2));
    }
  
    ionViewDidLoad() {
      this.prepareForBetterDispaly()
    }

    prepareForBetterDispaly() {
      let rowNum = 0; //counter to iterate over the rows in the grid
      
        for (let i = 0; i < this.currentItems.length; i+=2) { 
      
          this.grid[rowNum] = Array();
      
          if (this.currentItems[i]) { 
            this.grid[rowNum][0] = this.currentItems[i] 
          }
      
          if (this.currentItems[i+1]) { 
            this.grid[rowNum][1] = this.currentItems[i+1]
          }
      
          rowNum++;
        }
    }
  
    openItem(item: Item) {
      this.navCtrl.push('ItemDetailPage', {
        item: item
      });
    }

}