import { Component } from '@angular/core';

//action sheet
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent{
  constructor(private actionSheetCtrl: ActionSheetController){}
  alumnos: any = ["Juan", "Pedro", "Cristian", "Franco", "Eduardo"];

  async presentarActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Eliminar',
      subHeader: 'Confirma que deseas eliminar este registro',
      buttons : [
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel'
          },
        },
      ],
    });
    await actionSheet.present();
    const result = await actionSheet.onDidDismiss();
  }
}
