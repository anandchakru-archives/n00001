import { Component, OnInit } from '@angular/core';
import { ClogService } from '@nivite/ngsdk';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'n3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fireconfig = environment.firebase;
  invite: any;
  guest: any;
  constructor(private clog: ClogService) { }
  ngOnInit() {

  }
  loadInviteData(invite: any) {
    this.invite = invite;
    this.clog.log('invite: ' + (invite ? invite.hostName : invite));
  }
  loadUserData(user: any) {
    this.clog.log('user: ' + (user ? user.email : user));
  }
  loadGuestData(guest: any) {
    this.guest = guest;
    this.clog.log('guest: ' + (guest ? guest.email : guest));
  }
}
