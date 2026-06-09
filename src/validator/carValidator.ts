import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).max(20).min(1).required().messages({
        "string.pattern.base": "Бренд повинен содержати тількт літери англійскі та українські  (от 1 до 20 символів) без пробелів та цифр",
        "any.required": "Поле 'Бренд' є обов'язковим для заповнення",
        "string.empty": "Поле не може бути пустим"
    }),
    price: Joi.number().integer().max(1000000).min(0).required().messages({
        "number.base":"Ціна повинна бути числом",
        "number.integer":"Ціна повинна бути целим числом",
        "number.max": "Ціна не може перевищувати 1 000 000",
        "number.min": "Ціна не може бути від'ємной",
        "any.required":"Поле 'Ціна' обов'язкове для заповнення",
        "string.empty": "Поле не може бути пустим"
    }),

    year: Joi.number().integer().max(2026).min(1990).required().messages({
        "number.base":"Рік повинен бути числом",
        "number.integer":"Рік повинен бути целим числом",
        "number.max": "Рік не може бути більше 2026",
        "number.min": "Рік не повинен бути раніше 1990",
        "any.required":"Поле 'Рік' обов'язкове для заповнення",
        "string.empty": "Поле не може бути пустим"
    })


})