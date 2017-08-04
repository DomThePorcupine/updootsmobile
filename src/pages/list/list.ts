import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { RegisterPage } from '../register/register';
import { CreatePage } from '../create/create';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
    this.events.subscribe('user:authenticated', (eventData) => {
      this.postRequest();
    })
  }

  posts = [];
  auth = false;

  postRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'text/plain' );
    headers.append('Authorization', '');
    let options = new RequestOptions({ headers: headers, withCredentials: true });

    this.http.get("https://updoot.us/api/v1/message/top", options)
      .subscribe(data => {
        this.auth = true;
        this.posts = JSON.parse(data['_body'])

        for(var i = 0; i < this.posts.length; i++) {
          var posted = Date.parse(this.posts[i].time);
          var curr = Date.now()
          var numHours = (Math.abs(posted - curr) / 36e5);
          if(numHours < 1) {
            // min
            this.posts[i].time = (numHours * 60).toFixed(0).toString() + " min"
          } else if(numHours > 24) {
            // days
            this.posts[i].time = (numHours / 24.0).toFixed(0).toString() + " days"
          } else {
            // hours
            this.posts[i].time = (numHours).toFixed(0).toString() + " hrs"
          }
        }
      }, error => {
        // We couldn't get posts so show an error toast
        let toast = this.toastCtrl.create({
          message: 'There was an error retreving posts, are you logged in?',
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          //this.login()
        });

        toast.present();
        this.auth = true;
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
        console.log(data['_body'])
        for(var i = 0; i < this.posts.length; i++) {
          if(this.posts[i].id === id) {
            this.posts[i].updoots = JSON.parse(data['_body']).Updoots
            if(doot == 1) {
              this.posts[i].vote = 1;
            } else {
              this.posts[i].vote = -1;
            }
          }
        }
      }, error => {
        // Bad but ignore for now
      });

  }
  
  openReg() {
    this.navCtrl.push(RegisterPage);
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

    this.http.get("https://updoot.us/api/v1/message/top", options)
      .subscribe(data => {
        this.posts = JSON.parse(data['_body'])
        for(var i = 0; i < this.posts.length; i++) {
          var posted = Date.parse(this.posts[i].time);
          console.log(posted);
          var curr = Date.now()
          var numHours = (Math.abs(posted - curr) / 36e5);
          if(numHours < 1) {
            // min
            this.posts[i].time = (numHours * 60).toFixed(0).toString() + " min"
          } else if(numHours > 24) {
            // days
            this.posts[i].time = (numHours / 24.0).toFixed(0).toString() + " days"
          } else {
            // hours
            this.posts[i].time = (numHours).toFixed(0).toString() + " hrs"
          }
        }
        refresher.complete();
      }, error => {
        let toast = this.toastCtrl.create({
            message: 'There was an error retreving posts :(',
            duration: 3000,
            position: 'bottom'
          });

          toast.onDidDismiss(() => {
            //this.login()
          });

          toast.present();
        refresher.complete();
     })
  }
  ionViewDidLoad() {
    this.postRequest()
  }
  doPulling(refresher) {
    console.log('DOPULLING', refresher.progress);
  }

}
