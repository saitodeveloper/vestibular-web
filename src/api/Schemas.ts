import joi from "joi";
import GlobalSchemas from "./GlobalSchemas";

export class User {
    firstName: string = "";
    lastName: string = "";
}

export class Auth {
    email: string = "";
    password: string = "";
}

export class Device {
    type: string = navigator.userAgent;
    serial: string = "";
}

export class PostAuthUser {
    user: User = new User();
    auth: Auth = new Auth();
    device: Device = new Device();
}

const { UserSchema, IdentitySchema, DeviceSchema } = GlobalSchemas;

const PostUserSchema = joi.object({
    firstName: UserSchema.firstName.required(),
    lastName: UserSchema.lastName.required()
});

const PostAuthSchema = joi.object({
    email: IdentitySchema.identity.email({ tlds: { allow: false } }).required(),
    password: joi.string().min(6).max(20).required()
});

const PostAuthDeviceSchema = joi.object({
    type: DeviceSchema.type.required(),
    serial: DeviceSchema.serial.required()
});

export const PostAuthUserSchema = joi.object({
    auth: PostAuthSchema,
    device: PostAuthDeviceSchema,
    user: PostUserSchema
});
