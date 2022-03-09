export default function getFetchOptions() {
    let fetchOptions = {
        method: "GET",

        headers: {
            "Content-Type": "application/json",

            Accept: "application/json",

            "Access-Control-Allow-Origin": "*",

            "Access-Control-Allow-Headers": "*",
        },
    };

    return fetchOptions;
}
