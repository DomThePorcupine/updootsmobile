import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { CreatePage } from '../create/create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {

  }

  posts = [];
  auth = false;

  postRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'text/plain' );
    headers.append('Authorization', '');
    let options = new RequestOptions({ headers: headers, withCredentials: true });
 
    let postParams = {
      userid: 'dom'
    }

    this.http.get("https://updoot.us/api/v1/message", options)
      .subscribe(data => {
        
        this.posts = JSON.parse(data['_body'])
        console.log(this.posts)
      }, error => {
        console.log(error);
      })

  }

  doot(id, doot) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'text/plain' );
    headers.append('Authorization', '');
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    let postParams = {
      message: id,
      doot: doot
    }

    this.http.post("https://updoot.us/api/v1/doot", postParams, options)
      .subscribe(data => {
        // Should now be authenticated
        this.postRequest()
      }, error => {
        // Bad but ignore for now
      });

  }

  ionViewWillEnter() {
    this.postRequest();
  }
  
  openReg() {
    this.navCtrl.push(RegisterPage);
    console.log("asdfasdfasdfasdfsdf")
  }

  openCreate() {
    this.navCtrl.push(CreatePage);
  }

}
