import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import {Platform} from '@ionic/angular';
import {UserPhoto} from './user-photo.model'

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(
    private platform: Platform
  ) { }

  public foto: UserPhoto[] = [];
  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    const guardaImagen = await this.savePicture(capturedPhoto);
    this.foto.unshift(guardaImagen)
  }
  private async savePicture(photo: Photo){
    const base64Data = await this.readAsBase64(photo);
    const fileName = new Date().getTime()+'.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
  

    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }
  public async readAsBase64(photo: Photo) { if (this.platform.is('hybrid')) { // Read the file into base64 format 
    const file = await Filesystem.readFile({ 
      path: photo.path || '' 
    }); 
    return file.data; } // Busca foto, lee como blob y cambia a base64 
    const response = await fetch(photo.webPath!); 
    const blob = await response.blob(); 
    return await this.convertBlobToBase64(blob) as string; } 
    private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => { 
      const reader = new FileReader(); 
      reader.onerror = reject; 
      reader.onload = () => { 
        resolve(reader.result); 
      }; 
      reader.readAsDataURL(blob); 
    });
  
}
