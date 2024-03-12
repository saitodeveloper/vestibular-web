import Joi from "joi";

const validate =
    (schema: Joi.ObjectSchema<any>, options?: Joi.BaseValidationOptions) =>
    (obj: any) =>
        schema.validate(obj, options);

export default validate;
