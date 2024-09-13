const axios = require("axios")
const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.61 Chrome/126.0.6478.61 Not/A)Brand/8  Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6301.219 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; rv:127.0) Gecko/20100101 Firefox/127.0",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27",
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; ko-KR) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27"
];

const Service = {
    fetchService: async (url, res) => {
        try {
            const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
            const response = await axios.get(url, {
                headers: {
                    'User-Agent': userAgent
                }
            });
            return new Promise((resolve, reject) => {
                if (response.status === 200) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
        } catch (error) {
            res.send({
                status: false,
                code: 404,
                message: "Bad Request"
            });
            throw error;
        }
    }
}

module.exports = Service
