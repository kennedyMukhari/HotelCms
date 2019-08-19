import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { SlistService } from '../slist.service';
import { ToastController, AlertController, ModalController, NavController, LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-ahotel',
  templateUrl: './ahotel.page.html',
  styleUrls: ['./ahotel.page.scss'],
})
export class AhotelPage implements OnInit {

  ngOnInit()
  {

  }
  constructor( public shopping:SlistService,public toastCtrl:ToastController,public route:Router,public alertCtrl:AlertController,public loadingController: LoadingController) {
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

  hotel:Hotel =
  {
      
    name:"",
    roomtype:"",
    singlep:undefined,
    doublep:0,
    kingp:0,
    queenp:0,
    discount:0,
    rating:"",
    phone:undefined,
    address:undefined,
   feature1:"",
   feature2:"",
   feature3:"",
    feature4:"",
    description:"",
    pic1:""
  
  }

 message;

attraction;
attractionUpload;
storage= firebase.storage().ref();

async presentToast() {
  const toast = await this.toastCtrl.create({
    message: 'Hotel Information Successfully Captured',
    duration: 5000
  });
  toast.present();
}
ico;
pic ;
  addhotel(hotel)
  {
    this.presentToast();


    this.shopping.pics(hotel.pic1);
    console.log(hotel)
   
    this.shopping.addhotel(hotel);
    this.route.navigate(['edit']);
      
    
      }


      async attractionimage(image) {
        this.presentLoading();
        let imagetosend = image.item(0);
        if (!imagetosend) {
          const imgalert = await this.alertCtrl.create({
            message: 'Select image to upload',
            buttons: [{
              text: 'Okay',
              role: 'cancel'
            }]
          });
          imgalert.present();
        } else {
          if (imagetosend.type.split('/')[0] !== 'image') {
            const imgalert = await this.alertCtrl.create({
              message: 'Unsupported file type.',
              buttons: [{
                text: 'Okay',
                role: 'cancel'
              }]
            });
            imgalert.present();
            imagetosend = '';
            return;
           } else {
            const upload = this.storage.child(image.item(0).name).put(imagetosend);
            upload.on('state_changed', snapshot => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              this.attractionUpload = progress;
              console.log();
              
            }, error => {
            }, () => {
              upload.snapshot.ref.getDownloadURL().then(downUrl => {
                  this.hotel.pic1 = downUrl;
                  
                  if(this.hotel.pic1)
                  {
                    this.message="Image successfully uploaded.";
                    this.ico ='done-all';
                    this.pic =this.hotel.pic1;
                  }
                  console.log(downUrl)
                
              });
            });
           }
        }
      }

}

