import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modalParams.html'
})
export class ModalParams {
  constructor(public viewCtrl: ViewController, public params: NavParams) {
    this.param = params.get('param');
   }

   param;

  dismiss(){
      this.viewCtrl.dismiss();
  }
}