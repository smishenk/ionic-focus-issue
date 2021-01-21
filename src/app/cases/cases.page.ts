import { Component } from '@angular/core';

import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.page.html',
  styleUrls: ['./cases.page.scss'],
})
export class CasesPage {
  constructor(
    private actionCtrl: ActionSheetController,
    private navCtrl: NavController
  ) {}

  onCasesBtnClick() {
    this.actionCtrl.create({
      buttons: [
        {
          text: 'Go to Case 1',
          handler: () => {
            this.navCtrl.navigateForward('/case1');
          }
        },
        {
          text: 'Go to Case 2',
          handler: () => {
            this.navCtrl.navigateForward('/case2');
          }
        },
      ]
    }).then(actionSheet => actionSheet.present());
  }
}
