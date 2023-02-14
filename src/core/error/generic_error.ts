import { CustomError } from './../error/custom_error';

export class GenericError extends CustomError {
  statusCode: 500;

  constructor(public errorMessage: string) {
    super();
    Object.setPrototypeOf(this, GenericError.prototype);
  }

  formatErrors(): { message: string; field?: string }[] {
    return [{ message: this.errorMessage }];
  }
}