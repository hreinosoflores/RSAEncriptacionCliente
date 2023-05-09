import { Injectable } from '@angular/core';
import * as Forge from 'node-forge';

@Injectable({
  providedIn: 'root',
})
export class RSAHelper {

  publicKey: string = `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCByDKodFZHmAjlZnpEGLKlyu2u
  ThNNb7MC+Whm/RPBsfiFO+hJY5BSN2JPbbD4T3JOAnsmyHfSNDiuYKneL2QT4y8H
  6uXKV+GupEZxErlyz+eQoKYctXChsgx9biv59cnTfomXE0DvpzioyVseGQo7KvIq
  VQcx9uaJ3MrczwDj1QIDAQAB
  -----END PUBLIC KEY-----`;

  encryptWithPublicKey(valueToEncrypt: string): string {
    const rsa = Forge.pki.publicKeyFromPem(this.publicKey);
    return window.btoa(rsa.encrypt(valueToEncrypt.toString()));
  }
}
