import { Controller, Get, HttpCode, Render } from '@nestjs/common';
import { StaticService } from './static.service';

@Controller('')
export class StaticController {

    constructor(private staticService: StaticService){}

    @Get('/faq')
    @Render('faq')
    @HttpCode(200)
    getFAQ() {
        return this.staticService.getFAQ()
    }
}
