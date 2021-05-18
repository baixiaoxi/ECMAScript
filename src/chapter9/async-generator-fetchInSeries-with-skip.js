// async-await。next传值，跳过元素
async function* fetchInSeries([...urls]) {
    let skipNext = false;
    for (const url of urls) {
        if (skipNext) {
            skipNext = false;
        } else {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            skipNext = yield response.json();
        }
    }
}
