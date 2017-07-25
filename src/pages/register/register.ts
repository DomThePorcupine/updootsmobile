import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  userid = ''

  register() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'text/plain' );
    headers.append('Authorization', '');
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    let postParams = {
      userid: this.userid
    }

    this.http.post("https://updoot.us/api/v1/register", postParams, options)
      .subscribe(data => {
        // Should now be authenticated
        this.login()
      }, error => {
        // Bad but ignore for now
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

    this.http.post("https://updoot.us/api/v1/token", postParams, options)
      .subscribe(data => {
        // Should now be authenticated
        this.navCtrl.pop();
      }, error => {
        // Bad but ignore for now
      });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
