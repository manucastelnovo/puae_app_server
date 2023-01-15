import { CustomError } from './custom_error';

export class CustomErrorHandler {
    static fromGenericError<CustomError>(message: Error) {
        return `ERORR: ${message.message}`;
    }
}