import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SocialInfoPage } from '../pages/social-info/social-info';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
import { GMapPage } from '../pages/g-map/g-map';
import { JsonMenuPage } from '../pages/json-menu/json-menu';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'md-aperture' },
      { title: 'List', component: ListPage, icon: 'md-aperture' },
      { title: 'Me', component: SocialInfoPage, icon: 'md-aperture'},
      { title: 'Scan', component: BarcodeScannerPage, icon: 'qr-scanner'},
      { title: 'Map', component: GMapPage, icon: 'locate'},
      { title: 'Json', component: JsonMenuPage, icon: 'locate'}       
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
