const defaultOptions = {
    "Content-type": "application/json"
};

const url = "http://localhost:3000";

const onHandlerRequest = async (response: Response) => {
    const { status } = response;
    const body = status === 204 ? {} : await response.json();

    return { body, status };
};

const request = async (path: string, init?: RequestInit) => {
    const response = await fetch(`${url}${path}`, init);
    return await onHandlerRequest(response);
};

const get = async (
    path: string,
    query?: Record<string, string>,
    isAuthRequest = true,
    headers: any = { ...defaultOptions }
) => {
    if (isAuthRequest) {
        const token = localStorage.getItem("token");
        headers["Authorization"] = `Bearer ${token}`;
    }

    const queryString = query
        ? `?${new URLSearchParams(query).toString()}`
        : "";
    const options = {
        method: "GET",
        headers
    };

    return await request(`${path}${queryString}`, options);
};

const post = async (
    path: string,
    body: object,
    isAuthRequest = true,
    headers: any = { ...defaultOptions }
) => {
    if (isAuthRequest) {
        const token = localStorage.getItem("token");
        headers["Authorization"] = `Bearer ${token}`;
    }
    const options = {
        method: "POST",
        headers,
        body: JSON.stringify(body)
    };

    return await request(path, options);
};

export default { get, post };
