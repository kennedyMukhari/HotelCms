import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController, AlertController, ModalController, NavController, LoadingController, MenuController } from '@ionic/angular';
import { SlistService } from '../slist.service';
import { Observable } from 'rxjs';
import { Item } from '../shopping-item.interface';
import { Hotel } from '../hotel';
import { Profile } from '../luser';
import { Shotel } from '../shotel';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.page.html',
  styleUrls: ['./view-rooms.page.scss'],
})
export class ViewRoomsPage implements OnInit {
  shoppingList$:Observable<Item[]>;
  shoppingList1$:Observable<Hotel[]>;
pref$:Observable<Profile[]>;
shref$:Observable<Shotel[]>;

ngOnInit()
  {
    
  }
  constructor(private router:Router,public modal:ModalController,public alertCtrl:AlertController,public toastCtrl:ToastController, public shopping:SlistService,public loadingController: LoadingController) {

    this.presentLoading();

    this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().map(changes1=>{
      return changes1.map(c=>({key:c.payload.key,...c.payload.val(),}));
    });
    
    
    this.shoppingList1$ = this.shopping.getHotel().snapshotChanges().map(changes2=>{
      return changes2.map(c=>({key:c.payload.key,...c.payload.val(),}));
    });
    
    
     this.pref$= this.shopping.getprofile().snapshotChanges().map(changes3=>{
      return changes3.map(c=>({key:c.payload.key,...c.payload.val(),}));
    });
    
    
    
    this.shref$ = this.shopping.getshotel().snapshotChanges().map(changes4=>{
      return changes4.map(c=>({key:c.payload.key,...c.payload.val(),}));
    });
    
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

   

editshop(item)
{
  this.shopping.data =item;
 // this.navCtrl.push(EditshopPage);
}



bookingsp()
{
  console.log("the user id is =",this.shopping.blast)
  //this.navCtrl.push(BookingsPage);
}

showmodal1()
{
//const mymodal = this.modal.create(Modal1Page);
//mymodal.present();


}

showmodal2(shotel)
{
  console.log(shotel.key) 
  //this.shopping.setshotelkey(shotel.key);
//this.navCtrl.push(Modal2Page);

}

showmodal3(hotel)
{
  this.shopping.setshotelkey(hotel);
  this.router.navigate(['edit']);
//const mymodal = this.modal.create(Modal3Page);
//mymodal.present();

}






sign()
{
  //this.navCtrl.push(RegPage);
}

showmodalx(hotel)
{

  this.shopping.setxp(0);
this.shopping.prices(hotel);
this.shopping.pics(hotel.pic1);
//const mymodal = this.modal.create(ModalxPage);
//mymodal.present();

}
newh()
{
  console.log("AhotelPage")
  let x = 0;
  this.shopping.setxp(x);
  this.router.navigate(['ahotel']);
 // const mymodal = this.modal.create(AhotelPage);
  //mymodal.present();
}



vprofile()
{

//const mymodal = this.modal.create(VprofilePage);
//mymodal.present();

}

newhotel()
{

//this.navCtrl.push(SavehotelPage);  
}

signOut(){
  //firebase.auth().signOut().then(() => {
 //     this.navCtrl.setRoot(OptsPage)
 // }).catch((err) => {
 //   console.log('error', err);
    
 // })
}


delete(hotel)
{
  console.log("Delete" ,hotel)
  this.shopping.delhotel(hotel);

}

}

