import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modalParams.html'
})
export class ModalParams {
  constructor(public modalCtrl: ModalController, public viewCtrl: ViewController, public params: NavParams) {
    this.param = params.get('param');
   }

   param;

  dismiss(){
      this.viewCtrl.dismiss();
  }
}