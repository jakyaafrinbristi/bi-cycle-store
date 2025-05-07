import { Request, Response } from 'express';

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { NewsletterService } from './newsletter.service';

const subscribeNewsletter = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;

  const result = await NewsletterService.subscribe(email);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Subscribed to newsletter successfully!',
    data: result,
  });
});

const getSubscribers = catchAsync(async (_req: Request, res: Response) => {
  const result = await NewsletterService.getAllSubscribers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Fetched all newsletter subscribers!',
    data: result,
  });
});

export const NewsletterController = {
  subscribeNewsletter,
  getSubscribers,
};
