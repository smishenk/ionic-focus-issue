import { Component, ViewChild } from '@angular/core';

import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-case2',
  templateUrl: './case2.page.html',
  styleUrls: ['./case2.page.scss'],
})
export class Case2Page {
  @ViewChild(IonInput) input: IonInput;

  ionViewWillEnter() {
    this.input.setFocus();
  }
}
