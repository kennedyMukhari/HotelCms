import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController, AlertController, ModalController, NavController, LoadingController, MenuController } from '@ionic/angular';
import { SlistService } from '../slist.service';
import { Observable } from 'rxjs';
import { Item } from '../shopping-item.interface';
import { Hotel } from '../hotel';
import { Shotel } from '../shotel';
import 'rxjs/add/operator/map';
import { Profile } from '../luser';
import * as firebase from 'firebase';
import { CREDENTIALS } from '../credentials';
import { User } from '../user';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
 
  constructor( 

    public navCtrl: NavController, 
    public lsname:SlistService,
    public alertCrtl: AlertController,
    public toastCtrl:ToastController,public loadingController:LoadingController,
    private router:Router,
    private menu: MenuController,
   
    ) {
     // firebase.initializeApp(CREDENTIALS);
     firebase.auth().onAuthStateChanged(user => {
       if (user) {
        this.lsname.bless(user.uid)
        this.router.navigate(['view-rooms']);
        this.presentToast()
       } else {
    
         
       }
     })
  }

  user = {} as User;
error;
  fun(user:User)
{
  
console.log(user)
firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(result => {

  console.log(result.user.uid,result.user.email,'user logged in');
  this.lsname.bless(result.user.uid);
  console.log("navigate")
  
  if(result.user.uid >"")
  {
    
    this.router.navigate(['view-rooms']);

if(result.additionalUserInfo.isNewUser==true)
{
  // this.navCtrl.push(ProfilePage); 
}

else
{
  this.router.navigate(['view-rooms']);
}
  }
{

}
}).catch((error) => {
 
  let errorCode = error.code;
  let errorMessage = error.message;
  this.error =errorMessage;

  })
 
 
}
  ionViewDidEnter() {
    this.menu.enable(false);
  }
  ionViewWillLeave() {
    this.menu.enable(true);
  }
  ionViewDidLoad() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait',
      duration: 5000
    });
    await loading.present();

    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Login Successful',
      duration: 5000
    });
    toast.present();
}

async presentToast1() {
  const toast = await this.toastCtrl.create({
    message: this.error,
    duration: 5000
  });
  toast.present();
}
}



