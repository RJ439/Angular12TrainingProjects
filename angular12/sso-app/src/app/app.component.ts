import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sso-app';

  constructor(private oAuthService: OAuthService){
    this.configureSinglesSignOn();
  }

  private configureSinglesSignOn(){
    //use the sso.config.ts
    this.oAuthService.configure(authConfig);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oAuthService.initImplicitFlow();
  }
  logout() {
    this.oAuthService.logOut();
  }
  get token() {
    let claims:any = this.oAuthService.getIdentityClaims();
    console.log(claims);
    return claims ? claims : null;
  }
}
