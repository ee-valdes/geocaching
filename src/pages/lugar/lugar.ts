import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LugaresService } from '../../services/lugares.service';

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {
  
  lugar: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public LugaresService:LugaresService) {
    this.lugar = navParams.get('lugar');
  }
  guardarLugar(){
    this.lugar.id = Date.now();
    this.LugaresService.createLugar(this.lugar);
    console.log(this.lugar);
  }
  
}
