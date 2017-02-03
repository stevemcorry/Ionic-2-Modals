import { Component } from '@angular/core';

// Import ModalController
import { ModalController } from 'ionic-angular';

//Import the Component you want to use as a modal
import { ModalParams } from '../../modals/modalParams/modalParams';

@Component({
  selector: 'page-modal-params',
  templateUrl: 'page-params.html'
})
export class ModalParamsPage {

//Inject the modal controller
  constructor(public modCtrl: ModalController) {
  }

  openModal(input) {
    //create the modal and pass in the parameters
    let modal = this.modCtrl.create(ModalParams, {param: input});

    //open the new modal
    modal.present();
  }

}
