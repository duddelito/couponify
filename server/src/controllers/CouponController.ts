import {Request,Response} from 'express';

import {GetCampaignsById, GetCouponsById, CreateCoupons, StoreCoupons, GetCouponById} from '../services/Coupon.js';

export const GetCoupons = (request:Request, response:Response) => {
    const brandId = request.params.id;

    const campaigns = GetCampaignsById(brandId);

    if (!campaigns) {return;}

    const coupons = GetCouponsById(campaigns);

    response.json(coupons);
};

export const GenerateCoupons = (request:Request, response:Response) => {
    const coupons = CreateCoupons(request.body);
    StoreCoupons(coupons);

    const updatedCoupons = GetCouponsById(request.body.campaignId);
    response.json(updatedCoupons);
};

export const GetCoupon = (request:Request, response:Response) => {
    const userId = request.params.id;
    const campaignId = request.query.campaign;

    const coupon = GetCouponById(campaignId);
    response.json(coupon);
};
