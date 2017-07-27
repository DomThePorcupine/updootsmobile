import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { CreatePage } from '../create/create';
import { Tab2 } from './tabs';
import { ListPage } from '../list/list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1
  tab2
  tab3
  constructor(public navCtrl: NavController, public http: Http) {
    this.tab1 = ListPage;
    this.tab2 = Tab2;
    this.tab3 = CreatePage;
  }

  posts = [];
  auth = false;

  postRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'text/plain' );
    headers.append('Authorization', '');
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    this.http.get("https://updoot.us/api/v1/message", options)
      .subscribe(data => {
        
        this.posts = JSON.parse(data['_body'])
        for(var i = 0; i < this.posts.length; i++) {
          this.posts[i].index = i;
        }
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

  doRefresh(refresher) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'text/plain' );
    headers.append('Authorization', '');
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    this.http.get("https://updoot.us/api/v1/message", options)
      .subscribe(data => {
        
        this.posts = JSON.parse(data['_body'])
        refresher.complete();
      }, error => {
        console.log(error);
     })
  }

  doPulling(refresher) {
    console.log('DOPULLING', refresher.progress);
  }

}
