import * as Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/\w{4,}/).required(). messages({
        "string.pattern.base": "Имя должно біть не менее 4-х знаков"
    }),
    password: Joi.string().min(4).max(6).required(). messages({
        "string.min": "пароль должен быть не меньше 4-х знаков",
        "string.max": "пароль должен быть не больше 6-ти знаков"
    }),
    age: Joi.number().min(18).max(117).required().messages({
        "number.min": "возраст не меньше 18-ти",
        "number.max": "возраст не больше 117-ти",

    })
})

export default userValidator