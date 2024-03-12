import JoiDateExtension from "@Joi/date";
import JoiTemp from "joi";

const Joi = JoiTemp.extend(JoiDateExtension);

const BaseSchema = {
    createdAt: Joi.date(),
    id: Joi.number(),
    updatedAt: Joi.date()
};

const OAuthSchema = {
    hash: Joi.string(),
    userId: Joi.number(),
    ...BaseSchema
};

const DeviceSchema = {
    type: Joi.string().min(1).max(50),
    serial: Joi.string(),
    ...BaseSchema
};

const IdentitySchema = {
    identity: Joi.string().min(1).max(50),
    value: Joi.string().valid("email"),
    ...BaseSchema
};

const UserSchema = {
    firstName: Joi.string().min(1).max(50),
    lastName: Joi.string().min(1).max(50),
    role: Joi.string().min(1).max(50),
    ...BaseSchema
};

const QuestionSchema = {
    statement: Joi.string().min(1),
    institution: Joi.string().min(1).max(45),
    year: Joi.number()
        .integer()
        .positive()
        .min(1940)
        .max(Number.MAX_SAFE_INTEGER),
    examName: Joi.string().min(1).max(45),
    enum: Joi.number().integer().positive().min(1).max(Number.MAX_SAFE_INTEGER),
    ...BaseSchema
};

const AlternativeSchema = {
    statement: Joi.string().min(1),
    correct: Joi.boolean(),
    questionId: Joi.number()
        .integer()
        .positive()
        .min(1)
        .max(Number.MAX_SAFE_INTEGER),
    ...BaseSchema
};

const ActivitySchema = {
    correct: Joi.boolean(),
    userId: Joi.number()
        .integer()
        .positive()
        .min(1)
        .max(Number.MAX_SAFE_INTEGER),
    deviceId: Joi.number()
        .integer()
        .positive()
        .min(1)
        .max(Number.MAX_SAFE_INTEGER),
    deviceSerial: Joi.string().min(1).max(90),
    questionId: Joi.number()
        .integer()
        .positive()
        .min(1)
        .max(Number.MAX_SAFE_INTEGER),
    alternativeId: Joi.number()
        .integer()
        .positive()
        .min(1)
        .max(Number.MAX_SAFE_INTEGER),
    ...BaseSchema
};

export default {
    OAuthSchema,
    DeviceSchema,
    IdentitySchema,
    UserSchema,
    QuestionSchema,
    AlternativeSchema,
    ActivitySchema
};
