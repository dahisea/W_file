function calculateTime() {
    const createTime = new Date(Date.UTC(2024, 7, 14, 15, 55, 55)).getTime() / 1000;
    const currentTime = new Date().getTime() / 1000 + 8 * 60 * 60;
    const timeDifference = currentTime - createTime;
    const days = Math.floor(timeDifference / (24 * 3600));
    const hours = Math.floor((timeDifference % (24 * 3600)) / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);
    const seconds = Math.floor(timeDifference % 60);

    const displayTime = `${days}天 ${hours}時 ${minutes}分 ${seconds}秒`;
    document.getElementById("htmer_time").innerHTML = displayTime;
}
setInterval(calculateTime, 1000);

async function fetchAPI() {
    try {
        const response = await fetch('https://capi.dahi.eu.org/whour');
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2秒待機
        if (!response.ok) {
            throw new Error('ネットワーク応答エラー ' + response.statusText);
        }
        const data = await response.json();
        document.getElementById('api-data').innerHTML = formatData(data);
    } catch (error) {
        document.getElementById('api-data').innerHTML = `${error.message}`;
    }
}

function getLang() {
    return document.documentElement.lang || 'en';
}

const translations = {
    ja: {
        ip_info: "IP 情報", request_info: "リクエスト情報", network_info: "ネットワーク情報", time_info: "時間情報",
        city: "都市", continent: "大陸", country: "国", region: "地域", ip1: "IP1", ip2: "IP2",
        request_from: "リクエスト元", referer: "リファラー", accept_language: "受け入れ言語", platform: "プラットフォーム",
        utc_time: "UTC 時間", user_agent: "ユーザーエージェント"
    },
    zh-TW: {
        ip_info: "IP 信息", request_info: "请求信息", network_info: "网络信息", time_info: "时间信息",
        city: "城市", continent: "大洲", country: "国家", region: "地区", ip1: "IP1", ip2: "IP2",
        request_from: "请求来源", referer: "来源", accept_language: "接受语言", platform: "平台",
        utc_time: "UTC 时间", user_agent: "用户代理"
    },
    zh-CN: {
        ip_info: "IP 信息", request_info: "请求信息", network_info: "网络信息", time_info: "时间信息",
        city: "城市", continent: "大洲", country: "国家", region: "地区", ip1: "IP1", ip2: "IP2",
        request_from: "请求来源", referer: "来源", accept_language: "接受语言", platform: "平台",
        utc_time: "UTC 时间", user_agent: "用户代理"
    },
    en: {
        ip_info: "IP Info", request_info: "Request Info", network_info: "Network Info", time_info: "Time Info",
        city: "City", continent: "Continent", country: "Country", region: "Region", ip1: "IP1", ip2: "IP2",
        request_from: "Requested From", referer: "Referer", accept_language: "Accept Language", platform: "Platform",
        utc_time: "UTC Time", user_agent: "User-Agent"
    }
};

function formatData(data) {
    const lang = getLang();
    const t = translations[lang];

    return `
        <div class="data-section">
            <h3>${t.ip_info}</h3>
            <p>
            ${t.city}: ${data.headers?.["cf-ipcity"] || 'N/A'}<br>
            ${t.continent}: ${data.headers?.["cf-ipcontinent"] || 'N/A'}<br>
            ${t.country}: ${data.cfInfo?.country || 'N/A'}<br>
            ${t.region}: ${data.headers?.["cf-region"] || 'N/A'}<br>
            ${t.ip1}: ${data.headers?.["x-real-ip"] || 'N/A'}<br>
            ${t.ip2}: ${data.headers?.["cf-connecting-ip"] || 'N/A'}</p>

            <h3>${t.request_info}</h3>
            <p>
            ${t.request_from}: ${data.headers?.["x-requested-with"] || 'N/A'}<br>
            ${t.referer}: ${data.headers?.referer || 'N/A'}<br>
            ${t.accept_language}: ${data.headers?.["accept-language"] || 'N/A'}<br>
            ${t.platform}: ${data.headers?.["sec-ch-ua-platform"] || 'N/A'}</p>

            <h3>${t.time_info}</h3>
            <p>
            ${t.utc_time}: ${data.utcTime || 'N/A'}</p>

            <h3>${t.network_info}</h3>
            <p>
            ${t.user_agent}: ${JSON.stringify(data.headers?.["user-agent"], null, 2) || 'N/A'}</p>
        </div>
    `;
}

fetchAPI();
