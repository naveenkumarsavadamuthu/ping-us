import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockChainComponent } from './block-chain/block-chain.component';
import { HomeComponent } from './home/home.component';
import { AiComponent } from './ai/ai.component';
import { MetaverseComponent } from './metaverse/metaverse.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'block-chain', component: BlockChainComponent },
  {path:'ai', component:AiComponent},
  {path:'metaverse', component:MetaverseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
