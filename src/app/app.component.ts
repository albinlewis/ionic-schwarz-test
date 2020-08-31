import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  // toggle the left menu
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  goToDaily() {
    this.router.navigate(['/assignments']);
    this.toggleMenu();
  }

  goToProjects() {
    this.router.navigate(['/projects']);
    this.toggleMenu();
  }

}
