export default function postFetchOptions(requestBody) {
    let fetchOptions = {
        method: "POST",

        headers: {
            "Content-Type": "application/json",

            Accept: "application/json",

            "Access-Control-Allow-Origin": "*",

            "Access-Control-Allow-Headers": "*",
        },

        mode: "cors",

        body: JSON.stringify(requestBody),
    };

    return fetchOptions;
}
