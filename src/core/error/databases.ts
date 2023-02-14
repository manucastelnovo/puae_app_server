import { CustomError } from './../error/custom_error';

export class DatabaseError extends CustomError {
    statusCode = 500;

    constructor(public error: Error) {
      super()
      Object.setPrototypeOf(this, DatabaseError.prototype);
    }

    formatErrors(): { message: string; field?: string }[] {
        return [{message: 'Database error.'}];
    }

}
