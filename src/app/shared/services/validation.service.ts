export class ValidationService {

  static isEmail(email: string): boolean {
    // RFC 2822 compliant regex
    // tslint:disable-next-line:max-line-length
    const regexEmailValidation = /^\s*(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))\s*$/;
    return regexEmailValidation.test(email);
  }

  static isUrl(url: string): boolean {
    return /((ftp|https?):\/\/)?(www\.)?[a-z0-9\-\.]{1,}\.[a-z]{1,}$/.test(url);
  }
}
