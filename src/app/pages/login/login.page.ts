import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario={
    username:'',
    password:'',
  }
  constructor( private router:Router, private alertController:AlertController) { }

  ngOnInit() {
  }

  // userlog:string;
  // passlog:string


  async onSubmit(form){
    if (this.usuario.username==="wacoldo" && this.usuario.password==="123"){
      let navextra:NavigationExtras={
        state:{
          usuariolog:this.usuario
        }
      }
      this.router.navigate(['/home',navextra])

    }
    else{
      const alert= await this.alertController.create({
        header: 'Datos Invalidos',
        message: 'Intente nuevamente',
        buttons: ['OK']
      });

      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);

    }
    
  }
}
