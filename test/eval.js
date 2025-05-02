function loadHtml(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.open("text/html", "replace");
            document.write(html);
            document.close();
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

loadHtml('https://greasyfork-proxy.github.io/');