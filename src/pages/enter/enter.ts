import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'
import 'firebase/firestore';

@IonicPage()
@Component({
  selector: 'page-enter',
  templateUrl: 'enter.html',
})
export class EnterPage {

  productCode: string;
  name : string;
  classification : string;
  quantity: number;
  location: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterPage');
  }

  pop(){

    let firestore = firebase.firestore();
    const itemRef = firestore.collection("items").doc(this.productCode)
    itemRef.set({
      // productCode : this.productCode,
      name : this.name,
      classfication : this.classification,
      quantity : this.quantity,
      location : this.location
    }).then(()=>{
      alert("Data succesfully written!")
    }).catch((error)=>{
      alert("Error"+error)
    })


    this.navCtrl.pop()
  }
}
