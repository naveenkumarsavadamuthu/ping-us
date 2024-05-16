import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CustomCursorComponent } from './custom-cursor/custom-cursor.component';
import { BlockChainComponent } from './block-chain/block-chain.component';
import { AiComponent } from './ai/ai.component';
import { MetaverseComponent } from './metaverse/metaverse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CustomCursorComponent,
    BlockChainComponent,
    AiComponent,
    MetaverseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
