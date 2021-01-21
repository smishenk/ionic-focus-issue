import { Component } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-case1',
  templateUrl: './case1.page.html',
  styleUrls: ['./case1.page.scss'],
})
export class Case1Page {
  constructor(
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    const pageLoading = await this.loadingCtrl.create({
      message: 'Please, wait...'
    });

    pageLoading.present();

    setTimeout(() => pageLoading.dismiss(), 20);
  }
}
