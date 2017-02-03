import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalBasic } from '../../modals/modal-basic/modal-basic';


@Component({
  selector: 'page-modal-show',
  templateUrl: 'page-basic.html'
})
export class ModalShowPage {
  constructor(public modCtrl: ModalController) {
  }

  openModal(characterNum) {

    let modal = this.modCtrl.create(ModalBasic, characterNum);
    modal.present();
  }


}
