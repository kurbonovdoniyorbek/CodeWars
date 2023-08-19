function generateBC(url, s) {
    let n = url.indexOf("/")
    let mainUrl = url.slice(n + 1, url.length + 1)
    let pageNumber = mainUrl.indexOf("/")
    let params = mainUrl.slice(0, pageNumber)
    let fileName = mainUrl.slice(pageNumber + 1, url.length + 1).split(".")[0]
    return `<a href="/">HOME</a> ${s} <a href="/${params}/">${params.toUpperCase()}</a> ${s} <span class="active">${fileName.toUpperCase()}</span>`

}

generateBC("mysite.com/pictures/holidays.html", " : ")
generateBC("www.codewars.com/users/GiacomoSorbi", " / ")

//not solved


const stop = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];

function generateBC(url, separator) {
    let _nobr = /^(?:https*:\/\/)?(?:www\.)?([\w-\.]+\.\w{2,3})(?:\/index)?(?:\.\w+)?(:?#\w+)?(?:\?[\w=_&]+)?$/
    let _re = /^(?:https*:\/\/)?(?:www\.)?([\w-\.]+\.\w{2,3})([\w-\.\/]+?)(?:\/index)?(?:\.\w+)?(:?#\w+)?(?:\?[\w=_&]+)?$/i;
    let match = _re.exec(url)
    if (!match || _nobr.exec(url)) return '<span class="active">HOME</span>';
    let clean = match[2]
    let parts = clean.split("/").filter(x => x);
    let last = parts.pop();
    if (!last) return '<span class="active">HOME</span>';
    const short = (s) => {
        let w = (s || "");
        return w.length <= 30 ?
            w.replace(/-/g, ' ').toUpperCase() :
            w.split('-').filter(c => !stop.includes(c)).reduce((a, c) => a += c[0], '').toUpperCase();
    }

    let elems = parts.map((p, i) => {
        let path = parts.slice(0, i + 1).join("/");
        return `${separator}<a href="/${path}/">${short(p)}</a>`;
    });

    return '<a href="/">HOME</a>' + elems.join('') + `${separator}<span class="active">${short(last)}</span>`;
}

// Solved