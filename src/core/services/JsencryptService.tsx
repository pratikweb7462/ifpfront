/* 
Author: Zankat Kalpesh
Email: zankatkalpesh@gmail.com
*/
import { JSEncrypt } from 'jsencrypt';

const JsencryptService = (function () {

  const _PUB_KEY = process.env.NEXT_PUBLIC_JSENCRYPT_PUB_KEY || '';

  const _PRIV_KEY = process.env.NEXT_PUBLIC_JSENCRYPT_PRIV_KEY || '';

  class JsencryptService {

    private pubKey: string;
    private privKey: string;

    constructor(pubKey = null, privKey = null) {
      this.pubKey = (pubKey !== null) ? pubKey : _PUB_KEY;
      this.privKey = (privKey !== null) ? privKey : _PRIV_KEY;
    }

    get getPubKey(): string {
      return this.pubKey;
    }

    get getPrivKey(): string {
      return this.privKey;
    }

    encrypt(data: any): string | any {
      if (data === undefined || data === null) { return data; }
      const encrypt = new JSEncrypt({});
      encrypt.setPublicKey(this.pubKey);
      const encrypted = encrypt.encrypt(data);
      return encrypted;
    }

    decrypt(data: any): string | any {
      if (data === undefined || data === null) { return data; }
      if (typeof data === 'object') {
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            data[key] = this.decrypt(data[key]);
          }
        }
        return data;
      }
      const decrypt = new JSEncrypt({});
      decrypt.setPrivateKey(this.privKey);
      const uncrypted = decrypt.decrypt(data);
      return uncrypted;
    }

  }

  return JsencryptService;
})();

export const Jsencrypt = new JsencryptService();

export default JsencryptService;
