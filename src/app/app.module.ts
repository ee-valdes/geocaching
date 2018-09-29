import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from '../pages/lugar/lugar';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { TerceraPage } from '../pages/tercera/tercera';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LugaresService } from '../services/lugares.service';

export const firebaseConfig = {
  apiKey: "AIzaSyC6OHKnY2BCwq9RFCy9bA3eUEQOh7cBYv8",
  authDomain: "ionicbasicplatzi-b07f8.firebaseapp.com",
  databaseURL: "https://ionicbasicplatzi-b07f8.firebaseio.com",
  projectId: "ionicbasicplatzi-b07f8",
  storageBucket: "ionicbasicplatzi-b07f8.appspot.com",
  messagingSenderId: "410397013199"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    AboutPage,
    TerceraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),    
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    AboutPage,
    TerceraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresService
  ]
})
export class AppModule {}
