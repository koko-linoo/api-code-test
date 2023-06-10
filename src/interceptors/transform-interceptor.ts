import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Type } from "@nestjs/common";
import { instanceToPlain, plainToClass } from "class-transformer";
import { map } from "rxjs";

@Injectable()
export class TransformInterceptor implements NestInterceptor {
    constructor(private type: Type) { }
    intercept(_: ExecutionContext, next: CallHandler<any>) {
        return next.handle().pipe(map(data => {
            let temp = plainToClass(this.type, data)
            return instanceToPlain(temp)
        }));
    }
}