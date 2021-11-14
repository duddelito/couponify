import express from 'express';
import * as fs from "fs";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

import { GetCoupons, GenerateCoupons, GetCoupon } from '../controllers/CouponController.js';

router.get('/get/brand/:id', GetCoupons);
router.post('/generate', GenerateCoupons);
router.get('/get/user/:id', GetCoupon);


export default router;
