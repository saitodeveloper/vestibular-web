import Request from "./Request";
import { PostAuthUserSchema, PostAuthUser } from "./Schemas";
import validate from "./Validate";

const postAuthUserValidate = validate(PostAuthUserSchema);

export const postAuthUser = async (body: PostAuthUser) => {
    const errors = postAuthUserValidate(body);
    if (errors) return errors;
    return await Request.post("/v1/auth/user", body, false);
};
