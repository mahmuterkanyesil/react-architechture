export default function getFetchOptions(token) {
    let fetchOptions = {
        method: "GET",

        headers: {
            "Content-Type": "application/json",

            Accept: "application/json",

            "Access-Control-Allow-Origin": "*",

            "Access-Control-Allow-Headers": "*",
            Authorization: `Bearer ${token}`,
        },
    };

    return fetchOptions;
}
