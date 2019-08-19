import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { Observable} from 'rxjs/Observable';
import { Profile } from '../luser';
import { SlistService } from '../slist.service';
import { ToastController, AlertController, ModalController, NavController, LoadingController, MenuController } from '@ionic/angular';
import { Item } from '../shopping-item.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  ngOnInit()
  {

  }
  shoppingList$:Observable<Item[]>;
  prof$:Observable<Profile[]>;
  constructor(public shopping:SlistService,public loadingController: LoadingController,public router:Router) { 

    this.prof$ = this.shopping.getprofile().snapshotChanges().map(changes4=>{
   
      return changes4.map(c=>({key:c.payload.key,...c.payload.val(),
              
      }));
     
    });
    this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().map(changes=>{
      return changes.map(c=>({key:c.payload.key,...c.payload.val(),}));
    });
    this.presentLoading();
    this.presentLoading();
  }

  ionViewDidLoad() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait.',
      duration: 5000
    });
    await loading.present();

    console.log('Loading dismissed!');
  }

  load(profile:Profile)
  {
    
    console.log(profile.uid)
    this.shopping.getxid(profile.uid);
    this.router.navigate(['users']);
    

  }
}
