import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  /*lugares: any = [
    {nombre: 'Lugar 1', direccion: 'Dirección 1', categoria: 'Categoría 1'},
    {nombre: 'Lugar 2', direccion: 'Dirección 2', categoria: 'Categoría 2'},
    {nombre: 'Lugar 3', direccion: 'Dirección 3', categoria: 'Categoría 3'}
  ];*/

  lugares: any = [];

  constructor(public navCtrl: NavController, public lugaresService:LugaresService) {

    this.lugaresService.getLugares().valueChanges()
    .subscribe((lugaresFB)=>{this.lugares = lugaresFB;})
      
  }

  navegarALugar(name){    
    //alert('Ok!');
    this.navCtrl.push(LugarPage, {nombre: name});
  }
  irAVistaDeDetalle(){
    //alert('Ok!');
    this.navCtrl.push(LugarPage, {lugar:{}});
  }

  irAVistaDeDetalleExistente(lugar){
    this.navCtrl.push(LugarPage, {lugar: lugar});

  }
}
