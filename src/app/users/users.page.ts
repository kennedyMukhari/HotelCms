import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { Observable} from 'rxjs/Observable';
import {Item} from '../shopping-item.interface';
import { SlistService } from '../slist.service';
import { ToastController, AlertController, ModalController, NavController, LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  ngOnInit()
  {

  }
  shoppingList$:Observable<Item[]>;
  constructor(public shopping:SlistService,public loadingController: LoadingController) { 
    this.presentLoading();
    this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().map(changes=>{
      return changes.map(c=>({key:c.payload.key,...c.payload.val(),}));
    });
    this.presentLoading();
  }

  ionViewDidLoad() {

  
  }
 
    
  

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait.',
      duration: 5000
    });
    await loading.present();

    console.log('Loading dismissed!');
  }

}
