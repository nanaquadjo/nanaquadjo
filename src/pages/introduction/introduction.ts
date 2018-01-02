import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jhs1Page } from '../jhs1/jhs1';
import { Jhs2Page } from '../jhs2/jhs2';
import { Jhs3Page } from '../jhs3/jhs3';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the IntroductionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html',
})
export class IntroductionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroductionPage');
  }
  jhs1(){
    this.navCtrl.push(Jhs1Page);
  }
  jhs2(){
    this.navCtrl.push(Jhs2Page);
  }
  jhs3(){
    this.navCtrl.push(Jhs3Page);
  }
  contactus(){
    this.navCtrl.push(ContactPage);
  }
}
