import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingController: LoadingController) { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message:"Loading...",
      duration: 30000
    });
    await loading.present();
  }

  dismiss(){
    this.loadingController.dismiss;
    console.log("loaded data");
  }
}
