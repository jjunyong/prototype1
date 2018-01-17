import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  scannedCode=null;

  constructor(private barcodeScanner: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  openStockPage(){
    this.navCtrl.push('StockPage');
  }
  openMaintenancePage(){
    this.navCtrl.push('MaintenancePage');
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData=>{
        this.scannedCode = barcodeData.text;
    })
}
}
