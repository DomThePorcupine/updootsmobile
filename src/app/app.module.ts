import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Ng2OdometerModule } from 'ng2-odometer';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { CreatePage } from '../pages/create/create';
import { NewListPage } from '../pages/new-list/new-list';
import { ListPage } from '../pages/list/list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    CreatePage,
    NewListPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2OdometerModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    CreatePage,
    NewListPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
