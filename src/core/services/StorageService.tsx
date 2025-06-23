/* 
Author: Zankat Kalpesh
Email: zankatkalpesh@gmail.com
*/
'use client';

import { setData, getData } from "@/utils/function";
import SecurityService from "./SecurityService";

const StorageService = (function () {

  let _STORAGE_TYPE = (
    (process.env.NEXT_PUBLIC_STORAGE_TYPE && ['local', 'session'].includes(process.env.NEXT_PUBLIC_STORAGE_TYPE))
      ? process.env.NEXT_PUBLIC_STORAGE_TYPE
      : 'local'
  );

  const _SecurityService = new SecurityService();

  const Storage = (): Storage => {
    return (_STORAGE_TYPE === 'session') ? sessionStorage : localStorage;
  };

  class StorageService {

    constructor(type?: string) {
      _STORAGE_TYPE = (type && ['local', 'session'].includes(type)) ? type : _STORAGE_TYPE;
    }

    has(name: string): boolean {
      name = _SecurityService.base64Encode(name);
      return (Storage().getItem(name) !== null);
    }

    getAll(): any[] {
      const keys = Storage();
      const data: any = {};
      for (let key of Object.keys(keys)) {
        key = _SecurityService.base64Decode(key);
        data[key] = this.get(key);
      }
      return data;
    }

    get(name: string): boolean | any {
      if (this.has(name)) {
        name = _SecurityService.base64Encode(name);
        const value = _SecurityService.decrypt(Storage().getItem(name));
        return getData(value);
      } else {
        return false;
      }
    }

    set(name: string, value: any): boolean {
      const _name = _SecurityService.base64Encode(name);
      value = _SecurityService.encrypt(setData(value));
      Storage().setItem(_name, value);
      return this.has(name);
    }

    delete(name: string): boolean {
      const _name = _SecurityService.base64Encode(name);
      Storage().removeItem(_name);
      return (!this.has(name));
    }

    deleteAll(): boolean {
      Storage().clear();
      return true;
    }

  }

  return StorageService;
})();

export const Storage = new StorageService();

export default StorageService;
