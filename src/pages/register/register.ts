import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { API } from '../api';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
  }

  userid = ''
  token = ''
  register() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'text/plain' );
    headers.append('Authorization', '');
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    let postParams = {
      userid: this.userid
    }

    this.http.post(API + "/api/v1/register", postParams, options)
      .subscribe(data => {
        // Should now be authenticated
        this.presentToast(null)
      }, error => {
        // Bad but ignore for now
        this.presentToast(JSON.parse(error['_body']).message)
      });
  }

  login() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'text/plain' );
    headers.append('Authorization', '');
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    let postParams = {
      userid: this.userid
    }

    this.http.post(API + "/api/v1/token", postParams, options)
      .subscribe(data => {
        // Tell everyone that we are now authenticated
        this.events.publish('user:authenticated');
        this.navCtrl.pop();
      }, error => {
        // Bad but ignore for now
        console.log(error)
      });
  }
  
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg || 'User created... Now logging you in',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      if(!msg) {
        this.login()
      }
    });

    toast.present();
  }
}
