import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recoverpass',
  templateUrl: './recoverpass.page.html',
  styleUrls: ['./recoverpass.page.scss'],
})
export class RecoverpassPage implements OnInit {
  usuario = {
    username: '',
  }
  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }
  userrec: String;

  async onSubmit(form) {
    if(this.usuario.username!=''){
      let navextra: NavigationExtras = {
        state: {
          usuariolog: this.usuario
        }
      }
      this.router.navigate(['/home', navextra])
    }
    else{
      const alert= await this.alertController.create({
        header: 'Ingrese Usuario',
        
        buttons: ['OK']
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    



  }
}
