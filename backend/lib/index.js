const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const adminRouter = require('./routes/admin.routes');
const cartRouter = require('./routes/cart.routes');
const favouriteRouter = require('./routes/favourite.routes');
const orderRouter = require('./routes/order.routes');
const reviewsRouter = require('./routes/reviews.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', userRouter);
app.use('/admin', adminRouter);
app.use('/cart', cartRouter);
app.use('/favourite', favouriteRouter);
app.use('/order', orderRouter);
app.use('/review', reviewsRouter);
app.get('/', (req, res) => {
  res.send('hello worlds');
});

app.listen(8000, () => {
  console.log('listening');
});
