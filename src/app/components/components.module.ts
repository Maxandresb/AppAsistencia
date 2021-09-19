import { HeaderprincipalComponent } from './headerprincipal/headerprincipal.component';
import { HeaderlogComponent } from './headerlog/headerlog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterprincipalComponent } from './footerprincipal/footerprincipal.component';



@NgModule({
  declarations: [FooterprincipalComponent,HeaderlogComponent,HeaderprincipalComponent],
  exports:[FooterprincipalComponent,HeaderlogComponent,HeaderprincipalComponent],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
