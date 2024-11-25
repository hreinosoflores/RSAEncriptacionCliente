import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
import { RsaService } from './rsa.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Tipos de Login</h1>
    <h4>Login Básico</h4>
    <input type="text" #idusuBasico value="hreinoso">
    <input type="password"  #contraBasico value="123456">
    <button (click)="basicLogin(idusuBasico.value, contraBasico.value)">Login</button>
    <h4>Login RSA</h4>
    <input type="text" #idusuRSA value="oflores">
    <input type="password"  #contraRSA value="6666666">
    <button (click)="rsaLogin(idusuRSA.value, contraRSA.value)">Login</button>
    <h4>Login RSA Avanzado</h4>
    <input type="text" #idusuRSAAd value="preinoso">
    <input type="password"  #contraRSAAd value="66666">
    <button (click)="rsaAdvancedLogin(idusuRSAAd.value, contraRSAAd.value)">Login</button>
    <hr/>
    <ng-container *ngIf="loggedUser">
      <table>
        <tr>
          <td>Id:</td>
          <td>{{loggedUser.id}}</td>
        </tr>
        <tr>
          <td>Nombres:</td>
          <td>{{loggedUser.nombres}}</td>
        </tr>
        <tr>
          <td>Apellidos:</td>
          <td>{{loggedUser.apellidos}}</td>
        </tr>
        <tr>
          <td>Pais:</td>
          <td>{{loggedUser.pais}}</td>
        </tr>
        <tr>
          <td>Ciudad:</td>
          <td>{{loggedUser.ciudad}}</td>
        </tr>
        <tr>
          <td>Direccion:</td>
          <td>{{loggedUser.direccion}}</td>
        </tr>
        <tr>
          <td>Correo:</td>
          <td>{{loggedUser.correo}}</td>
        </tr>
        <tr>
          <td>Telefono:</td>
          <td>{{loggedUser.telefono}}</td>
        </tr>
      </table>
    </ng-container>
 `,
  standalone: false
})
export class AppComponent implements OnInit {

  title = 'RSAEncriptacionClient';

  loggedUser: User | undefined;

  constructor(private rsaService: RsaService) {
  }

  ngOnInit(): void {
  }


  basicLogin(idusu: string, contra: string) {
    this.rsaService.basicLogin({
      idUsuario: idusu,
      contrasenha: contra,
    }).subscribe(resp => {
      this.loggedUser = resp;
      console.log('basicLogin', this.loggedUser);
    });
  }

  rsaLogin(idusu: string, contra: string) {
    this.rsaService.rsaLogin({
      idUsuario: idusu,
      contrasenha: contra,
    }).subscribe(resp => {
      this.loggedUser = resp;
      console.log('rsaLogin', this.loggedUser);
    });
  }

  rsaAdvancedLogin(idusu: string, contra: string) {
    this.rsaService.rsaAdvancedLogin({
      idUsuario: idusu,
      contrasenha: contra,
    }).subscribe(resp => {
      this.loggedUser = resp;
      console.log('rsaAdvancedLogin', this.loggedUser);
    });
  }

}
