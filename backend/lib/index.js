const express = require('express');
const userRouter = require('./routes/user.routes');
const adminRouter = require('./routes/admin.routes');
const cartRouter = require('./routes/cart.routes');
const favouriteRouter = require('./routes/favourite.routes');
const app = express();

app.use(express.json());
app.use('/auth', userRouter);
app.use('/admin', adminRouter);
app.use('/cart', cartRouter);
app.use('/favourite', favouriteRouter);
app.get('/', (req, res) => {
  res.send('hello worlds');
});

app.listen(8000, () => {
  console.log('listening');
});
