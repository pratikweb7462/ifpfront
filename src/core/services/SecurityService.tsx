/* 
Author: Zankat Kalpesh
Email: zankatkalpesh@gmail.com
*/

import * as CryptoJS from 'crypto-js';
import { setData, getData } from "@/utils/function";

const SecurityService = (function () {

  const _KEY = process.env.REACT_APP_SECURITY_KEY || '@ZK@';

  class SecurityService {

    private _key: any;

    constructor(key = null) {
      this._key = (key !== null) ? key : _KEY;
    }

    get key(): string {
      return CryptoJS.enc.Utf8.parse(this._key).toString();
    }

    base64Encode(data: any): string {
      data = setData(data);
      return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data));
    }

    base64Decode(data: any): string | any {
      try {
        const decodeData = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
        return getData(decodeData);
      } catch (e) {
        return data;
      }
    }

    encrypt(data: any, key?: string): string {
      data = setData(data);
      const securitySalt = CryptoJS.lib.WordArray.random(128 / 8);
      const sKey = (key) ? CryptoJS.enc.Utf8.parse(key).toString() : this.key;
      const securityKey = CryptoJS.PBKDF2(sKey, securitySalt, {
        keySize: 256 / 32,
        iterations: 100
      });
      const securityIv = CryptoJS.lib.WordArray.random(128 / 8);
      const encryptedData = CryptoJS.AES.encrypt(data.toString(), securityKey, {
        iv: securityIv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
      });
      return (securitySalt.toString() + encryptedData.toString() + securityIv.toString());
    }

    decrypt(data: any, key?: string): string | any {
      if (data === undefined || data === null) { return data; }
      const securitySalt = CryptoJS.enc.Hex.parse(data.substr(0, 32));
      const securityIv = CryptoJS.enc.Hex.parse(data.substr(-32));
      const sKey = (key !== undefined) ? CryptoJS.enc.Utf8.parse(key).toString() : this.key;
      const securityKey = CryptoJS.PBKDF2(sKey, securitySalt, {
        keySize: 256 / 32,
        iterations: 100
      });
      let encryptedData = data.substr(32);
      encryptedData = encryptedData.substr(0, encryptedData.length - 32);
      const decryptedData = CryptoJS.AES.decrypt(encryptedData, securityKey, {
        iv: securityIv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
      });
      const decrypted = decryptedData.toString(CryptoJS.enc.Utf8);
      return getData(decrypted);
    }

    aesEncrypt(data: string, key?: string) {
      const sKey = (key) ? key : this._key;
      return CryptoJS.AES.encrypt(data, sKey, {
        format: {
          stringify: function (cipherParams: any) {
            const data: any = [];
            data.push(cipherParams.salt.toString());
            data.push(cipherParams.ciphertext.toString(CryptoJS.enc.Base64));
            data.push(cipherParams.iv.toString());
            const strData: any = data.join(':');
            return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(strData));
          },
          parse: function (encryptData: any) {
            const enData = CryptoJS.enc.Base64.parse(encryptData).toString(CryptoJS.enc.Utf8);
            const data = enData.split(':');
            const cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(data[1]) });
            cipherParams.iv = CryptoJS.enc.Hex.parse(data[2])
            cipherParams.salt = CryptoJS.enc.Hex.parse(data[0])
            return cipherParams;
          }
        }
      }).toString();
    }

    aesDecrypt(data: string, key?: string) {
      const sKey = (key) ? key : this._key;
      return CryptoJS.AES.decrypt(data, sKey, {
        format: {
          stringify: function (cipherParams: any) {
            const data: any = [];
            data.push(cipherParams.salt.toString());
            data.push(cipherParams.ciphertext.toString(CryptoJS.enc.Base64));
            data.push(cipherParams.iv.toString());
            const strData: any = data.join(':');
            return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(strData));
          },
          parse: function (encryptData: any) {
            const enData = CryptoJS.enc.Base64.parse(encryptData).toString(CryptoJS.enc.Utf8);
            const data = enData.split(':');
            const cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(data[1]) });
            cipherParams.iv = CryptoJS.enc.Hex.parse(data[2])
            cipherParams.salt = CryptoJS.enc.Hex.parse(data[0])
            return cipherParams;
          }
        }
      }).toString(CryptoJS.enc.Utf8);
    }

  }

  return SecurityService;
})();

export const Security = new SecurityService();

export default SecurityService;
