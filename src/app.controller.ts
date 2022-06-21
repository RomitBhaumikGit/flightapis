import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/getFlightSeatInfo')
  sendFlightSeatInfo(@Param()params):any {
      return "";
  }
  @Get('/getFlightPriceInfo')
  sendFlightPriceInfo(@Param()params):string {
    return "";
  }
  @Get('/getActiveUsers')
  sendActiveUsers(@Param()params):any {
    return [{a:1, b:2}, {a:2, b:3}];
  }
  @Get('/cancelSeats/:userId/:no_of_seats')
  cancelUserSeats(@Param()params):string {
    return "";
  }
  @Get('/deletebooking/:userId')
  deleteUserBooking(@Param()params):string {
    return "";
  }
  @Get('/getUserInfo/:userId')
  sendUserInfo(@Param()params):string {
    return "";
  }
  @Get('/bookFlight/:userName/:Flightid/:no_of_seats/:trip')
  bookFlightsforUser(@Param()params):string {
    return "";
  }

}
