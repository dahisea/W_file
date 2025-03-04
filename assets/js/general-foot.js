function calculateTime() {
    const createTime = new Date(Date.UTC(2024, 7, 14, 15, 55, 55)).getTime() / 1000;
    const currentTime = new Date().getTime() / 1000 + 8 * 60 * 60;
    const timeDifference = currentTime - createTime;
    const days = Math.floor(timeDifference / (24 * 3600));
    const hours = Math.floor((timeDifference % (24 * 3600)) / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);
    const seconds = Math.floor(timeDifference % 60);
    document.getElementById("htmer_time").innerHTML = `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
}
setInterval(calculateTime, 1000);

async function fetchAPI() {
    try {
        const response = await fetch('https://capi.dahi.eu.org/whour');
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (!response.ok) throw new Error('网络响应错误 ' + response.statusText);
        const data = await response.json();
        document.getElementById('api-data').innerHTML = formatData(data);
    } catch (error) {
        document.getElementById('api-data').innerHTML = error.message;
    }
}

function getLang() {
    return document.documentElement.lang || 'en';
}

const translations = {
    ja: {
        ip_info: "IP 情報",
        request_info: "リクエスト情報",
        network_info: "ネットワーク情報",
        time_info: "時間情報",
        city: "都市",
        continent: "大陸",
        country: "国",
        region: "地域",
        ip1: "IP1",
        ip2: "IP2",
        request_from: "リクエスト元",
        referer: "リファラー",
        accept_language: "受け入れ言語",
        platform: "プラットフォーム",
        utc_time: "UTC 時間",
        user_agent: "ユーザーエージェント",
        connection_info: "接続情報",
        protocol: "プロトコル",
        hostname: "ホスト名",
        pathname: "パス",
        method: "メソッド",
        cf_info: "Cloudflare 情報",
        client_tcp_rtt: "クライアント TCP RTT",
        latitude: "緯度",
        longitude: "経度",
        asn: "ASN",
        as_organization: "AS 組織",
        timezone: "タイムゾーン",
        tls_version: "TLS バージョン",
        tls_cipher: "TLS 暗号",
        colo: "データセンター",
        is_http2: "HTTP/2 かどうか",
        is_quic: "QUIC かどうか",
        headers: "ヘッダー",
        accept: "Accept",
        accept_encoding: "Accept Encoding",
        accept_language: "Accept Language",
        cf_connecting_ip: "CF 接続 IP",
        cf_ipcountry: "CF IP 国",
        cf_ray: "CF Ray",
        x_real_ip: "X-Real-IP"
    },
    "zh-TW": {
        ip_info: "IP 信息",
        request_info: "請求信息",
        network_info: "網絡信息",
        time_info: "時間信息",
        city: "城市",
        continent: "大洲",
        country: "國家",
        region: "地區",
        ip1: "IP1",
        ip2: "IP2",
        request_from: "請求來源",
        referer: "來源",
        accept_language: "接受語言",
        platform: "平台",
        utc_time: "UTC 時間",
        user_agent: "用戶代理",
        connection_info: "連接信息",
        protocol: "協議",
        hostname: "主機名",
        pathname: "路徑",
        method: "方法",
        cf_info: "Cloudflare 信息",
        client_tcp_rtt: "客戶端 TCP RTT",
        latitude: "緯度",
        longitude: "經度",
        asn: "ASN",
        as_organization: "AS 組織",
        timezone: "時區",
        tls_version: "TLS 版本",
        tls_cipher: "TLS 加密套件",
        colo: "數據中心",
        is_http2: "是否 HTTP/2",
        is_quic: "是否 QUIC",
        headers: "請求頭",
        accept: "Accept",
        accept_encoding: "Accept Encoding",
        accept_language: "Accept Language",
        cf_connecting_ip: "CF 連接 IP",
        cf_ipcountry: "CF IP 國家",
        cf_ray: "CF Ray",
        x_real_ip: "X-Real-IP"
    },
    "zh-CN": {
        ip_info: "IP 信息",
        request_info: "请求信息",
        network_info: "网络信息",
        time_info: "时间信息",
        city: "城市",
        continent: "大洲",
        country: "国家",
        region: "地区",
        ip1: "IP1",
        ip2: "IP2",
        request_from: "请求来源",
        referer: "来源",
        accept_language: "接受语言",
        platform: "平台",
        utc_time: "UTC 时间",
        user_agent: "用户代理",
        connection_info: "连接信息",
        protocol: "协议",
        hostname: "主机名",
        pathname: "路径",
        method: "方法",
        cf_info: "Cloudflare 信息",
        client_tcp_rtt: "客户端 TCP RTT",
        latitude: "纬度",
        longitude: "经度",
        asn: "ASN",
        as_organization: "AS 组织",
        timezone: "时区",
        tls_version: "TLS 版本",
        tls_cipher: "TLS 加密套件",
        colo: "数据中心",
        is_http2: "是否 HTTP/2",
        is_quic: "是否 QUIC",
        headers: "请求头",
        accept: "Accept",
        accept_encoding: "Accept Encoding",
        accept_language: "Accept Language",
        cf_connecting_ip: "CF 连接 IP",
        cf_ipcountry: "CF IP 国家",
        cf_ray: "CF Ray",
        x_real_ip: "X-Real-IP"
    },
    en: {
        ip_info: "IP Info",
        request_info: "Request Info",
        network_info: "Network Info",
        time_info: "Time Info",
        city: "City",
        continent: "Continent",
        country: "Country",
        region: "Region",
        ip1: "IP1",
        ip2: "IP2",
        request_from: "Requested From",
        referer: "Referer",
        accept_language: "Accept Language",
        platform: "Platform",
        utc_time: "UTC Time",
        user_agent: "User-Agent",
        connection_info: "Connection Info",
        protocol: "Protocol",
        hostname: "Hostname",
        pathname: "Pathname",
        method: "Method",
        cf_info: "Cloudflare Info",
        client_tcp_rtt: "Client TCP RTT",
        latitude: "Latitude",
        longitude: "Longitude",
        asn: "ASN",
        as_organization: "AS Organization",
        timezone: "Timezone",
        tls_version: "TLS Version",
        tls_cipher: "TLS Cipher",
        colo: "Data Center",
        is_http2: "Is HTTP/2",
        is_quic: "Is QUIC",
        headers: "Headers",
        accept: "Accept",
        accept_encoding: "Accept Encoding",
        accept_language: "Accept Language",
        cf_connecting_ip: "CF Connecting IP",
        cf_ipcountry: "CF IP Country",
        cf_ray: "CF Ray",
        x_real_ip: "X-Real-IP"
    }
};

function formatData(data) {
    const t = translations[getLang()];
    const { connectionInfo, cfInfo, headers, utcTime } = data;

    return `
        <div class="data-section">
            <h3>${t.connection_info}</h3>
            <p>
                ${t.protocol}: ${connectionInfo.protocol}<br>
                ${t.hostname}: ${connectionInfo.hostname}<br>
                ${t.pathname}: ${connectionInfo.pathname}<br>
                ${t.method}: ${connectionInfo.method}
            </p>

            <h3>${t.cf_info}</h3>
            <p>
                ${t.client_tcp_rtt}: ${cfInfo.clientTcpRtt} ms<br>
                ${t.latitude}: ${cfInfo.latitude}<br>
                ${t.longitude}: ${cfInfo.longitude}<br>
                ${t.continent}: ${cfInfo.continent}<br>
                ${t.country}: ${cfInfo.country}<br>
                ${t.asn}: ${cfInfo.asn}<br>
                ${t.as_organization}: ${cfInfo.asOrganization}<br>
                ${t.timezone}: ${cfInfo.timezone}<br>
                ${t.tls_version}: ${cfInfo.tlsVersion}<br>
                ${t.tls_cipher}: ${cfInfo.tlsCipher}<br>
                ${t.colo}: ${cfInfo.colo}<br>
                ${t.is_http2}: ${cfInfo.isHTTP2}<br>
                ${t.is_quic}: ${cfInfo.isQUIC}
            </p>

            <h3>${t.headers}</h3>
            <p>
                ${t.accept}: ${headers.accept}<br>
                ${t.accept_encoding}: ${headers["accept-encoding"]}<br>
                ${t.accept_language}: ${headers["accept-language"]}<br>
                ${t.cf_connecting_ip}: ${headers["cf-connecting-ip"]}<br>
                ${t.cf_ipcountry}: ${headers["cf-ipcountry"]}<br>
                ${t.cf_ray}: ${headers["cf-ray"]}<br>
                ${t.referer}: ${headers.referer}<br>
                ${t.user_agent}: ${headers["user-agent"]}<br>
                ${t.x_real_ip}: ${headers["x-real-ip"]}
            </p>

            <h3>${t.time_info}</h3>
            <p>${t.utc_time}: ${utcTime}</p>
        </div>
    `;
}

fetchAPI();