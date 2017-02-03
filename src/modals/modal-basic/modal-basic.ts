import { Component } from '@angular/core';
 //Import the view controller (used to close the modal)
import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal-basic.html'
})
export class ModalBasic {
//inject the view controller
  constructor(public viewCtrl: ViewController) { }

  dismiss(){
  // close the modal
      this.viewCtrl.dismiss();
  }
}