# Ionic 2 Modals

### Basic Modal Setup

Start with a normal Ionic 2 app.

In the component you wish to add your modal 

```typescript
import { Component } from '@angular/core';
//import modal controller (used to create and display the modal)
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
```
##### *Remember to import the Modal component in your app.module.ts, then add to the declarations and entry components!
