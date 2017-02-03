import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ModalParamsPage } from '../pages/page-params/page-params';
import { ModalShowPage } from '../pages/page-basic/page-basic';
//import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalBasic } from '../modals/modal-basic/modal-basic';
import { ModalParams } from '../modals/modalParams/modalParams';

@NgModule({
  declarations: [
    MyApp,
    ModalParamsPage,
    ModalShowPage,
    //HomePage,
    TabsPage,
    ModalBasic,
    ModalParams
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalParamsPage,
    ModalShowPage,
    //HomePage,
    TabsPage,
    ModalBasic,
    ModalParams
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
