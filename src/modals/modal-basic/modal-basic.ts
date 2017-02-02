import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal-basic.html'
})
export class ModalBasic {
  constructor(public modalCtrl: ModalController, public viewCtrl: ViewController) { }

  dismiss(){
      this.viewCtrl.dismiss();
  }
}