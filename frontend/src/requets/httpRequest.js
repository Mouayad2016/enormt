import axios from "axios";

async function postData(url, data) {
    try {
        console.log("Posting to URL:", url);

        const response = await axios.post(url, data, { timeout: 5000 }); // Set the timeout value in milliseconds (e.g., 5000 for 5 seconds)
        console.log(url)
        return response;
    } catch (e) {
        throw e
    }
}
export default postData;