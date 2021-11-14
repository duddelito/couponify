import express, {Application} from 'express';
import cors from 'cors';

import couponRoutes from './routes/Coupon.js';

const PORT = process.env.PORT || 3001;

const app:Application = express();
const crossDomain = cors();
app.use(crossDomain);

app.use(express.json());

app.use('/coupon', couponRoutes);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
