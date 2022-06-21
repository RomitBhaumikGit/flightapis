import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    sendFlightSeatInfo(params: any): any;
    sendFlightPriceInfo(params: any): string;
    sendActiveUsers(params: any): any;
    cancelUserSeats(params: any): string;
    deleteUserBooking(params: any): string;
    sendUserInfo(params: any): string;
    bookFlightsforUser(params: any): string;
}
