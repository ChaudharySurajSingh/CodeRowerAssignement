require('dotenv').config();
const mongoose = require('mongoose');
const Configuration = require('./models/Configuration');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const id = 'qwertyuiop'; 
  const data = {
    _id: id,
    arrayData: [
      ['sym1','sym2','sym3'],
      ['sym4','sym6','sym8'],
      ['sym5','sym1','sym0']
    ],
    remark: 'Initial remark'
  };
  await Configuration.findByIdAndUpdate(id, data, { upsert: true, new: true });
  console.log('Seeded configId:', id);
  mongoose.disconnect();
});
