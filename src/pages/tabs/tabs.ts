import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';

//import {Tab1Root,Tab2Root} from '../pages'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root : any = HomePage;
  tab2Root : any = AboutPage;

  constructor() {

  }
}
