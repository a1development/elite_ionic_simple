import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public licenseKey = '';
  public loading!: HTMLIonLoadingElement;
  
  constructor(
    private navCtrl: NavController,
    private authProvider: AuthService,
    private loadingCtrl: LoadingController
  ) {}
  async login() {
    const overlay = await this.loadingCtrl.create({
      message: 'Authenticating...',
    });
    this.loading = overlay;
    this.loading.present();
    this.authProvider.checkKey(this.licenseKey).subscribe(
      (res) => {
        this.loading.dismiss();
        this.navCtrl.navigateRoot('/home');
      },
      (err) => {
        this.loading.dismiss();
      }
    );
  }
}