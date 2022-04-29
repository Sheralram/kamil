import { HttpService } from './http.service';
import { AuthService } from './auth.service';

export * from './auth.service';
export * from './http.service';

export const service: any[] = [
    HttpService,
    AuthService
];