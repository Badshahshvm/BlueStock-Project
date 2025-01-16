const mongoose = require('mongoose');

const ipoSchema = new mongoose.Schema({
              companyLogoUrl: {
                            type: String,
                            required: true,
                            default: ""
              },
              companyName: {
                            type: String,
                            required: true,
              },
              price_band: {
                            type: String,
                            required: true,
              },
              open: {
                            type: Date,
                            required: true,
              },
              close: {
                            type: Date,
                            required: true,
              },
              issue_size: {
                            type: Number,
                            required: true,
              },
              listing_date: {
                            type: Date,
              },
              status: {
                            type: String,
                            enum: ["Open", "Closed", "Listed", "Upcoming"],
                            required: true,
              },
              ipo_price: {
                            type: Number,
                            required: true,
              },
              listing_price: {
                            type: Number,
              },
              listing_gain: {
                            type: String,
              },
              cmp: {
                            type: Number,
              },
              current_return: {
                            type: String,
              },
              rhp: {
                            type: String,
              },
              drhp: {
                            type: String,
              },
}, {
              timestamps: true
});
const ipoModel = mongoose.model('IPO', ipoSchema);
module.exports = ipoModel

