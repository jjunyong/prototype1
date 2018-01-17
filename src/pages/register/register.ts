import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
// import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User
    labelColor : string = "primary"

    constructor( //private afAuth: AngularFireAuth,
        public navCtrl: NavController, public navParams: NavParams){

    }

    register(user:User){
        // this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    }
    doBlur(){
        this.labelColor = "danger";
    }
    doFocus(){
        this.labelColor = "secondary";
    }

}
