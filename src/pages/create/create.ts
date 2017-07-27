import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  newpost = ''
  tab
  create() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'text/plain' );
    headers.append('Authorization', '');
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    let postParams = {
      message: this.newpost
    }

    this.http.post("https://updoot.us/api/v1/message", postParams, options)
      .subscribe(data => {
        // Should now be authenticated
        this.tab = this.navCtrl.parent;
        this.tab.select(0);
      }, error => {
        // Bad but ignore for now
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
