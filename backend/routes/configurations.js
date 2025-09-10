const express = require('express');
const router = express.Router();
const Configuration = require('../models/Configuration');

//get
router.get('/:id', async (req, res) => {
  try {
    const config = await Configuration.findById(req.params.id).lean();
    if (!config) return res.status(404).json({ message: 'Configuration not found' });
    return res.json(config.arrayData);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});

//put
router.put('/:id', async (req, res) => {
  try {
    const { remark } = req.body;
    if (typeof remark !== 'string') {
      return res.status(400).json({ message: 'Invalid remark' });
    }
    const updated = await Configuration.findByIdAndUpdate(
      req.params.id,
      { remark },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Configuration not found' });
    return res.json({ message: 'success' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
