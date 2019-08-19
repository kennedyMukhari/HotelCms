import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { SlistService } from '../slist.service';
import { ToastController, AlertController, ModalController, NavController, LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  ngOnInit()
  {
    
  }
  constructor(public router:Router,
    public shopping:SlistService,public modal:ModalController,public loadingController: LoadingController,public toastCtrl:ToastController) {
      let x =this.shopping.getshotelkey();
      console.log("edit =",x)
      this.presentLoading();
  }

hotel:Hotel = this.shopping.gethoteldata();
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
  
  closemod()
  {
   // const loading = this.loadingController.create({
   //   duration: 5000
  //  });
  //   loading.present();
 //   this.view.dismiss();
  }

  next()
{

 // const alert =  this.alertCtrl.create({
  //  title:'Action not allowed!',
  //  message: 'Page intended to serve as a template.',
   // buttons: ['OK']
 // });

 //  alert.present();
}

showmodal3(hotel)
{
  //this.shopping.setshotelkey(hotel.key);
//const mymodal = this.modal.create(Modal3Page);
//mymodal.present();

}

async presentToast() {
  const toast = await this.toastCtrl.create({
    message: 'Room information updated.',
    duration: 5000
  });
  toast.present();
}



save(hotel)
{
 // console.log(hotel);
 this.presentToast()
  this.shopping.edithotel(hotel);
  this.router.navigate(['view-rooms']);
}
}
