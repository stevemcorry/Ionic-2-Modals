import { Component } from '@angular/core';

//import modal controller
import { ModalController } from 'ionic-angular';

//import the component you want to use as a modal
import { ModalBasic } from '../../modals/modal-basic/modal-basic';


@Component({
  selector: 'page-modal-show',
  templateUrl: 'page-basic.html'
})
export class ModalShowPage {
  // inject the modal controller
  constructor(public modCtrl: ModalController) {
  }

  openModal() {

    // create the modal
    let modal = this.modCtrl.create(ModalBasic);

    //open the new modal
    modal.present();
  }


}
