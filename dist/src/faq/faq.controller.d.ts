import { FaqService } from './faq.service';
export declare class FaqController {
    private faqService;
    constructor(faqService: FaqService);
    getFAQ(): {
        cssFileName: string;
    };
}
