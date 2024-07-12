let Joi = require("joi");

let user = {
  body: Joi.object().keys({
    username: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    role: Joi.string().trim(),
  }),
};
module.exports = { user };