export default function deleteFetchOptions(requestBody) {
    let fetchOptions = {
        method: "DELETE",

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
