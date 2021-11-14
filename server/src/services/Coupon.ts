import fs from "fs";
import { v4 as uuidv4 } from 'uuid';

const readFile = (path: string) => {
    const json = fs.readFileSync(path, 'utf8');
    const data = JSON.parse(json);

    if (!data) {return;}
    return data;
}


export const GetCampaignsById = (id: any) => {
    const campaigns = readFile('./campaigns.json');

    if (!campaigns) {return;}

    const campaignsById = campaigns.find((x:any) => x.brandId === id).campaignId;

    return campaignsById;
}


export const GetCouponsById = (id: any) => {
    const coupons = readFile('./coupons.json');

    if (!coupons) {return;}

    const campaignCoupons = coupons.filter((item:any) => item.campaignId === id);

    return campaignCoupons;
}


export const CreateCoupons = (data: any) => {
    let coupons = [];
    for (let i = 0; i < data.amount; i++) {
        coupons.push({"campaignId": data.campaignId, "code": uuidv4(), "expire": "2021-11-30", "redeemed": false})
    }

    return coupons;
}

export const StoreCoupons = (coupons: any) => {
    let storedCoupons = readFile('./coupons.json');

    coupons.forEach((coupon: any) => {
        storedCoupons.push(coupon);
    });

    fs.writeFileSync('./coupons.json', JSON.stringify(storedCoupons));
}

export const GetCouponById = (id: any) => {
    const coupons = readFile('./coupons.json');

    if (!coupons) {return;}

    const coupon = coupons.find((x:any) => x.campaignId === id);

    return coupon;
}
