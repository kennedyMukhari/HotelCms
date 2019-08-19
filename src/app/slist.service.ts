import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Item } from './shopping-item.interface';
import { Profile } from './luser';
import { Shotel } from './shotel';
import { Hotel } from './hotel';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SlistService {
  data:any;
  com = 0;
  blast;
  
  p1;
  p2;
  p3;
  p4;
  p5;
  
  xp=0;
  
  c1 =500;
  c2 =1000;
  c3 =1500;
  c4 =2000;
  dis =0.15;
  pics(p1)
  {
  this.p1 =p1;
  
  }
  //
   shoppingListRef = this.db.list<Item>('roomsas');
   shoppingListRef1 = this.db.list<Hotel>('north');
   shotelref =this.db.list<Shotel>('Shotel');
   
   pref = this.db.list<Profile>('profile/'+this.blast);
  
    constructor(private db:AngularFireDatabase, public afAuth:AngularFireAuth,public router:Router) {
     
    }
  toxic;
  

  cpro(profile)
  {
    this.toxic =this.afAuth.auth.currentUser.uid.toString();
    this.pref = this.db.list<Profile>('profile/'+this.toxic);
    return this.pref.push(profile);
  };
  
  setxp(x)
  {
    this.xp = x;
    console.log(this.xp)
  }
  getxp(x)
  {
    this.xp = x;
    console.log(this.xp);
    return this.xp;
  }
  
  bless(uid)
  {
    this.blast =uid;
    console.log("Look Here",uid)
   
   this.shoppingListRef = this.db.list<Item>(this.blast);
    return this.blast;
  }
  getprofile()
  {
    this.toxic =this.afAuth.auth.currentUser.uid.toString();
  
    console.log("Damn the console =", this.toxic);
    this.pref = this.db.list<Profile>('profile/'+this.setxid());
  return this.pref;
  }
  
  profile()
  {
    this.toxic =this.afAuth.auth.currentUser.uid.toString();
  
    this.pref = this.db.list<Profile>('profile/'+this.toxic);
  return this.pref;
  }
  xid;
  getxid(xid)
  {
 this.xid = xid;
  }
  setxid()
  {
  return this.xid;
  }
     getShoppingList()
     {
      this.shoppingListRef = this.db.list<Item>('pools/'); 
  return this.shoppingListRef;
     }
    
  addItem(item:Item)
  {
  
  console.log(item)
  return this.shoppingListRef.push(item);
  }
  
  editItem(item:Item)
  {
    return this.shoppingListRef.update(item.key,item)
  }
  
  removeItem(item:Item)
  {
  return this.shoppingListRef.remove(item.key)
  }
  
  
  
  addhotel(hotel:Hotel)
  {
  
  console.log(hotel)
  
  if(this.xp == 0)
  {
  this.shoppingListRef1 = this.db.list<Hotel>('north');
  return this.shoppingListRef1.push(hotel);
  }
  
  else
  {
    this.shoppingListRef1 = this.db.list<Hotel>('Shotel/'+this.shotelkey);
    return this.shoppingListRef1.push(hotel); 
  }
  }
  
  
  
  getoroom()
  {
   return this.shoppingListRef1 = this.db.list<Hotel>('Shotel/'+this.shotelkey);
  
  }
  
  
  
  
  getHotel()
     {
       
  return this.shoppingListRef1;
     }
  
     removehotel(hotel:Hotel)
     {
     return this.shoppingListRef1.remove(hotel.key);
     }
  
     prices(hotel:Hotel)
     {
      this.c1 =hotel.singlep;
      this.c2 =hotel.doublep;
      this.c3 =hotel.kingp;
      this.c4 =hotel.queenp;
     this.dis =hotel.discount;
      
     }
  
  
  
     //shotel functions
  shotelkey;
  hoteldata;
  setshotelkey(hotel)
  {
    this.shotelkey= hotel.key;
  this.hoteldata=hotel;
    
  }
  
  gethoteldata()
  {
   return this.hoteldata; 
  }
  
  
  getshotelkey()
  {
    return this.shotelkey;
  
    
  }
  
  
     addsho(shotel:Shotel)
  {
  
    this.shotelref =this.db.list<Shotel>('Shotel'); 
  return this.shotelref.push(shotel);
  }
  
  getshotel()
  {
    
  return this.shotelref;
  
  }
  
  addroom(shotel:Shotel,keys)
  {
    console.log("Shotel key =",this.shotelkey)
    this.shotelref = this.db.list<Shotel>('Shotel'); 
  return this.shotelref.push(shotel);
  }
  
  
  edithotel(hotel:Hotel)
  {
    return this.shoppingListRef1.update(hotel.key,hotel)
  }
  
  
  delhotel(hotel:Hotel)
  {
  return this.shoppingListRef1.remove(hotel.key)
  }


  logout(userid)
  {
    firebase.auth().onAuthStateChanged(user => {
      if (userid!="") {
      
       this.router.navigate(['view-rooms']);
      } else {
     
        firebase.auth().signOut();
        console.log(firebase.auth().signOut());
        this.router.navigate(['home']);
      }
    })
 }
  }
  
  