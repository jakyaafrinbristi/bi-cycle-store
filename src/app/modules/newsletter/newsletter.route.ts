import { Router } from "express";
import { NewsletterController } from "./newsletter.controller";


const newsletterRouter = Router();
newsletterRouter.get('/', NewsletterController.getSubscribers);
newsletterRouter.post('/subscribe', NewsletterController.subscribeNewsletter);

export default newsletterRouter;