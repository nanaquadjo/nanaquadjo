import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { IntroductionPage } from '../pages/introduction/introduction';
import { Jhs1Page } from '../pages/jhs1/jhs1';
import { Jhs2Page } from '../pages/jhs2/jhs2';
import { Jhs3Page } from '../pages/jhs3/jhs3';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    IntroductionPage,Jhs1Page,Jhs2Page,Jhs3Page,ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroductionPage,Jhs1Page,Jhs2Page,Jhs3Page,ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
