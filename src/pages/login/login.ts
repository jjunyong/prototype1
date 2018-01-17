import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
//import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase'
import 'firebase/firestore';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  labelColor : string = "primary"
  constructor(//private afAuth: AngularFireAuth,
      public navCtrl: NavController, public navParams: NavParams){

  }

  login(user:User){
  //    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
    const result = firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      if(result){
          this.navCtrl.setRoot('HomePage')
      }
  }
  register(){
      this.navCtrl.push('RegisterPage')
  }
  doBlur(){
      this.labelColor = "danger";
  }
  doFocus(){
      this.labelColor = "secondary";
  }

}
