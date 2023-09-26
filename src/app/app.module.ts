import { NgModule, Inject } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Network, ConnectionStatus } from '@capacitor/network';

import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WTranslateModule } from './shared/modules/translate.module';
import { LoadingComponent } from './loading/loading.component';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    WTranslateModule.forRoot(),
    IonicModule.forRoot(),
    LoadingComponent,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.listenToNetWork();
  }

  private async listenToNetWork(): Promise<void> {
    const offlinePageElement = this.document.querySelector('.offline-page') as HTMLElement;
    Network.addListener('networkStatusChange', (state: ConnectionStatus) =>
      offlinePageElement.style.display = state.connected ? 'none' : 'flex'
    );
  }
}
