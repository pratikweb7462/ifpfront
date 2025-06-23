/* 
Author: Zankat Kalpesh
Email: zankatkalpesh@gmail.com
*/

export function setData(value: any): any {
  return JSON.stringify({ type: (typeof value), data: value });
}

export function getData(value: any): string | any | null {
  if (!!value) {
    try {
      value = JSON.parse(value);
    } catch (e) {
      return value;
    }
    return (value.data !== undefined) ? value.data : null;
  } else {
    return value;
  }
}
