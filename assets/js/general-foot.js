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



document.addEventListener("DOMContentLoaded", () => {
    const divs = document.querySelectorAll('div');

    divs.forEach(div => {
        let currentStyle = div.getAttribute('style');
        if (currentStyle) {
            // 使用正则表达式匹配背景图片的 URL
            let regex = /background-image:\s*url\(["']?(.*?)["']?\)/;
            let match = regex.exec(currentStyle);

            if (match) {
                let currentUrl = match[1];
                // 添加随机数参数
                if (currentUrl.includes('?')) {
                    currentUrl += `&random=${Math.random()}`;
                } else {
                    currentUrl += `?random=${Math.random()}`;
                }
                // 替换背景图片 URL，保留其他样式不变
                let newStyle = currentStyle.replace(regex, `background-image: url('${currentUrl}')`);
                div.setAttribute('style', newStyle);
            }
        }
    });
}); <
/script><script>
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

function formatData(data) {
    return `
                <div class="data-section">
                    <h3>IP 情報</h3>
                    <p>
                    都市: ${data.headers["cf-ipcity"]}<br>
                    タイプ: ${data.headers["cf-ipcontinent"]}<br>
                    国: ${data.country}<br>
                    地域: ${data.headers["cf-region"]}<br>
                    IP1: ${data.headers["x-real-ip"]}<br>
                    IP2: ${data.headers["cf-connecting-ip"]}</p>
                    <h3>その他情報</h3>
                    <p>
                    リクエスト元: ${data.headers["x-requested-with"]}<br>
                    リファラー: ${data.referer}<br>
                    受け入れ言語: ${data.acceptLanguage}<br>
                    プラットフォーム: ${data.platform}<br>
                    UTC 時間: ${data.utcTime}<br>
                    ユーザーエージェント: ${JSON.stringify(data.userAgentInfo, null, 2)}</p>
                </div>
            `;
}

fetchAPI();