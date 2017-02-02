import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ModalShowPage } from '../pages/modal-show/modal-show';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalBasic } from '../modals/modal-basic/modal-basic';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ModalShowPage,
    HomePage,
    TabsPage,
    ModalBasic
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ModalShowPage,
    HomePage,
    TabsPage,
    ModalBasic
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
