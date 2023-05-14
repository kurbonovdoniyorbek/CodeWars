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