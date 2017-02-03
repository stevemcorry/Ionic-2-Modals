import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Pages
import { ModalParamsPage } from '../pages/page-params/page-params';
import { ModalShowPage } from '../pages/page-basic/page-basic';
import { TabsPage } from '../pages/tabs/tabs';

//Modals
import { ModalBasic } from '../modals/modal-basic/modal-basic';
import { ModalParams } from '../modals/modalParams/modalParams';

@NgModule({
  declarations: [
    MyApp,
    
    //Pages
    ModalParamsPage,
    ModalShowPage,
    TabsPage,

    //Modals
    ModalBasic,
    ModalParams
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    //Pages
    ModalParamsPage,
    ModalShowPage,
    TabsPage,

    //Modals
    ModalBasic,
    ModalParams
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
