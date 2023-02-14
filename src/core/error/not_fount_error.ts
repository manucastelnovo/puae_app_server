import { CustomError } from './../error/custom_error';

export class NotFoundError extends CustomError {
  statusCode = 404;
  constructor(public resource: string) {
    super();
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  formatErrors() {
    return [{ message: `${this.resource} not found` }];
  }
}