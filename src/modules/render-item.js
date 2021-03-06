import tweetLinks from "./tweet-links";

function renderItem(item) {
    var el = document.createElement('div');

    var mediaTag = "";

    if (item.postMedia.length > 0) {
        mediaTag = `<figure class="media"><img src="${item.postMedia[0]}"></figure>`;
    }

    el.innerHTML = `<article class="card ${item.truth.class}" data-item="${item.index}" id="card_${item.index}" tabindex="-1">
    <div class="tweet">
        <header>
            <div class="author"><b class="username"><span class="striked-text"><span>${randBlankString(20, 40)}</span></span></b><span class="tag"><span class="striked-text"><span>${randBlankString(12, 24)}</span></span></span></div>
            <p class="message">${tweetLinks(item.postText[0], true)}</p>
        </header>
        <div class="target" data-item="${item.index}" tabindex="0">
            ${mediaTag}
            <div class="summary">
                <h2 class="title" title="${item.targetTitle}">${item.targetTitle}</h2>
                <p class="description">${item.targetDescription}</p>
                <a class="sharedlink"><span class="striked-text">${randBlankString(24, 36)}</span></a>
            </div>
        </div>
        <time class="timestamp" datetime="${item.timestamp.format()}">${item.timestamp.format("h:mm A - MMM Do YYYY")}</time>
    </div>
    <footer>
        <div class="left">#${item.index+1}</div>
        <div class="center" data-title="${item.truth.text}"><progress class="truth" max=1 value=${item.truth.mean}></progress></div>
        <div class="right"><code class="entry-id">${item.id}</code></div>
    </footer>
</article>`;

    return el;
}

function randBlankString(min, max) {
    var count = min + Math.round(Math.random()*(max-min));
    return (new Array(count)).join('\u00a0');
}

export default renderItem