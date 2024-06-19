require('dotenv').config();

const mercadopago = require('mercadopago')
const { update } = require('../models/Product.model');
// // Requerir MercadoPagoConfig y Preference
const { MercadoPagoConfig, Preference } = require('mercadopago');

const client = new MercadoPagoConfig({
    accessToken:process.env.accessToken,
})


const payProduct = async (req, res) => {  

    try {
        const body ={
            items:[{
                title: req.body.title,
                quantity: Number(req.body.quantity),
                unit_price: req.body.price,
                currency_id:"CLP",
            },
        ],
        back_urls:{
            success: "https://tienda-ecommerce-5.vercel.app/",
            failure: "https://tienda-ecommerce-5.vercel.app/",
            pending: "https://tienda-ecommerce-5.vercel.app/",
        },
        auto_return: "approved",

        };
        const preference = new Preference(client);
        const result = await preference.create({body});
        res.json({
            id: result.id,
        });

    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    payProduct
};