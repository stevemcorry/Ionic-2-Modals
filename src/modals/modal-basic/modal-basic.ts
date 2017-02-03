import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal-basic.html'
})
export class ModalBasic {
  constructor(public viewCtrl: ViewController) { }

  dismiss(){
      this.viewCtrl.dismiss();
  }
}