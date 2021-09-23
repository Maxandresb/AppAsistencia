import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  asistencia=[{
    asignatura:'Programacion de Aplicaciones Moviles',
    codigo:'PGY-4121',
    porcentaje:'100% (10 de 10 clases)'
  },
  {
    asignatura:'Calidad de Software',
    codigo:'CSY-41111',
    porcentaje:'80% (8 de 10 clases)'
  },
  {
    asignatura:'Arquitectura',
    codigo:'ASY-4131',
    porcentaje:'100% (10 de 10 clases)'
  },
 {
  asignatura:'Inglés',
  codigo:'INI-5111',
  porcentaje:'60% (6 de 10 clases)'

}]
  nombreusuario:string;
  constructor(private activeroute:ActivatedRoute, private router:Router) {
    
    this.activeroute.queryParams.subscribe(params=>{
      
      if(this.router.getCurrentNavigation().extras.state){
       
        this.nombreusuario= this.router.getCurrentNavigation().extras.state.usuariolog.username;
        console.log(this.nombreusuario)
      }
    });

  }
  async Cerrar(){
    this.nombreusuario=null;
  }
}
