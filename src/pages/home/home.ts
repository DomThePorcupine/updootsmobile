import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, Platform } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { CreatePage } from '../create/create';
import { NewListPage } from '../new-list/new-list';
import { ListPage } from '../list/list';
import { StatusBar } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1
  tab2
  tab3
  constructor(public navCtrl: NavController, public http: Http, public platform: Platform) {
    this.tab1 = ListPage;
    this.tab2 = NewListPage;
    this.tab3 = CreatePage;
  }

  posts = [];
  auth = false;
  
  openReg() {
    this.navCtrl.push(RegisterPage);
    console.log("asdfasdfasdfasdfsdf")
  }

  openCreate() {
    this.navCtrl.push(CreatePage);
  }

  doPulling(refresher) {
    console.log('DOPULLING', refresher.progress);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.hide();
    });
  }

}
