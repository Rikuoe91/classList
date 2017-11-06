import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataProvider } from '../providers/data/data';
import {InfoPage} from "../pages/info/info";

const firebaseConfig ={
        apiKey: "AIzaSyABep3_raw8MCUrpeSPRsD-nZWEjCyz084",
        authDomain: "testapp-3dbf1.firebaseapp.com",
        databaseURL: "https://testapp-3dbf1.firebaseio.com",
        projectId: "testapp-3dbf1",
        storageBucket: "testapp-3dbf1.appspot.com",
        messagingSenderId: "1096314575175"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
      InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
