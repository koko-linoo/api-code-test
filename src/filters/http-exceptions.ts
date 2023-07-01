import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, HttpException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch()
export class ResponseExceptionFilter implements ExceptionFilter {
    catch(e: Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        let status: number = HttpStatus.INTERNAL_SERVER_ERROR;
        let message: string = "Internal Server Error";

        console.log(e);

        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            switch (e.code) {
                case "P2002":
                    status = HttpStatus.CONFLICT;
                    message = "Duplicate Entry";
                    break;
                default:
                    status = HttpStatus.BAD_REQUEST;
                    message = "Bad Request";
                    break;
            }
        } else if (e instanceof HttpException) {
            status = e.getStatus();
            message = e.message;
        }

        response
            .status(status)
            .json({
                status: status,
                message: message,
                timestamp: new Date().toISOString(),
            });
    }
}