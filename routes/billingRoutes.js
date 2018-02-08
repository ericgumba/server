const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async(req, res) => {

        // basically if the req
        // does not have a cookie
        // which contains user. 
        // Then send a 401 error.
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd', // returns a promise
            description: '$5 for 5 credits', // therefore we use
            source: req.body.id // await
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};