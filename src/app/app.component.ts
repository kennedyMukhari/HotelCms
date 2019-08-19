import { Component } from '@angular/core';

import { Platform, ModalController, AlertController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { SlistService } from './slist.service';

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
    public router:Router,
    public modal:ModalController,
    public alertCtrl:AlertController,
    public toastCtrl:ToastController,
    public shopping:SlistService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  goToHome() {
    this.router.navigate(['view-rooms']);
  }
  goToProfile() {
    this.router.navigate(['profile']);
  }
  goToUsers() {
    this.router.navigate(['users']);
  }
  newh() {
    // console.log("AhotelPage")
    // let x = 0;
    // this.shopping.setxp(x);
    this.router.navigate(['ahotel']);
  }

  unread()
  {
console.log("Goodbye")
this.presentToast1();
this.shopping.logout("");
  }


  async presentToast1() {
    const toast = await this.toastCtrl.create({
      message: "Logout Successful.",
      duration: 5000
    });
    toast.present();
}
}