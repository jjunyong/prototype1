import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';


// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireModule } from 'angularfire2';
import { NgxQRCodeModule} from 'ngx-qrcode2'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

import firebase from 'firebase'

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDFbpcE6ZIx-IUF7iUuDksNR-x3kpu1pwA",
  authDomain: "prototype1-389a3.firebaseapp.com",
  databaseURL: "https://prototype1-389a3.firebaseio.com",
  projectId: "prototype1-389a3",
  storageBucket: "",
  messagingSenderId: "797265295111"
};

firebase.initializeApp(FIREBASE_CONFIG)

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
    // AngularFireAuthModule,
    // AngularFireModule.initializeApp(FIREBASE_CONFIG),
    // AngularFireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
