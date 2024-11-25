import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { Observable } from 'rxjs';
import { RSAHelper } from './rsa-helper';

@Injectable({
  providedIn: 'root'
})
export class RsaService {

  baseHttpAddress: string = 'http://localhost:42371/';

  constructor(private http: HttpClient, private helper: RSAHelper) { }

  basicLogin(usu: User): Observable<User> {
    return this.http.post<User>(
      this.baseHttpAddress + 'api/user/basic-login',
      usu
    );
  }

  rsaLogin(usu: User): Observable<User> {
    usu.contrasenha = this.helper.encryptWithPublicKey(usu.contrasenha);
    return this.http.post<User>(
      this.baseHttpAddress + 'api/user/rsa-login',
      usu
    );
  }

  rsaAdvancedLogin(user: User): Observable<User> {
    const encJsonUser = this.helper.encryptWithPublicKey(
      JSON.stringify(user)
    );
    return this.http.post<User>(
      this.baseHttpAddress + 'api/user/rsa-advanced-login',
      { data: encJsonUser }
    );
  }
}
