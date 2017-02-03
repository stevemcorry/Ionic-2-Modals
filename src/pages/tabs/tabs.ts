import { Component } from '@angular/core';

import { ModalParamsPage } from '../page-params/page-params';
import { ModalShowPage } from '../page-basic/page-basic';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ModalParamsPage;
  tab3Root: any = ModalShowPage;

  constructor() {

  }
}
