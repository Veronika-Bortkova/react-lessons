import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).max(20).min(1).required().messages({
        "string.pattern.base": "Бренд должен содержать только буквы английского, украинского или русского алфавита (от 1 до 20 символов) без пробелов и цифр",
        "any.required": "Поле 'Бренд' является обязательным для заполнения",
        "string.empty": "Поле не может быть пустым"
    }),
    price: Joi.number().integer().max(1000000).min(0).required().messages({
        "number.base":"Цена должна быть числом",
        "number.integer":"Цена должна быть целым числом",
        "number.max": "Цена не может превышать 1 000 000",
        "number.min": "Цена не может быть отрицательной",
        "any.required":"Поле 'Цена' обязательно для заполнения",
        "string.empty": "Поле не может быть пустым"
    }),

    year: Joi.number().integer().max(2026).min(1990).required().messages({
        "number.base":"Год должна быть числом",
        "number.integer":"Год должен быть целым числом",
        "number.max": "Год не может быть больше 2026",
        "number.min": "Год не должен быть раньше 1990",
        "any.required":"Поле 'Год' обязательно для заполнения",
        "string.empty": "Поле не может быть пустым"
    })


})