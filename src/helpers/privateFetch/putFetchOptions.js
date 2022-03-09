export default function putFetchOptions(requestBody, token) {
    let fetchOptions = {
        method: "PUT",

        headers: {
            "Content-Type": "application/json",

            Accept: "application/json",

            "Access-Control-Allow-Origin": "*",

            "Access-Control-Allow-Headers": "*",
            Authorization: `Bearer ${token}`,
        },

        mode: "cors",

        body: JSON.stringify(requestBody),
    };

    return fetchOptions;
}
