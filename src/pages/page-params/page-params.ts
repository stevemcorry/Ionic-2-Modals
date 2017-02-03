import { Component } from '@angular/core';
import { ModalParams } from '../../modals/modalParams/modalParams';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-modal-params',
  templateUrl: 'page-params.html'
})
export class ModalParamsPage {

  constructor(public navCtrl: NavController, public modCtrl: ModalController) {
  }

  openModal(input) {
    let modal = this.modCtrl.create(ModalParams, {param: input});
    modal.present();
  }

}
