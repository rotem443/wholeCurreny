import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
//import { ItemDetailPage} from '../pages/item-detail/item-detail'
//import { HomePage } from '../pages/home/home';
import { ItemDetailPageModule} from '../pages/item-detail/item-detail.module'
import { HomePageModule } from '../pages/home/home.module';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Api } from '../providers/api/api';
import { Items } from '../mocks/items';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    ItemDetailPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api,
    Items
  ]
})
export class AppModule {}
