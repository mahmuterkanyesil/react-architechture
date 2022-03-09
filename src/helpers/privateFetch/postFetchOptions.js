export default function postFetchOptions(requestBody, token) {
    let fetchOptions = {
        method: "POST",

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
