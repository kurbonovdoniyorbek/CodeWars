function countVegetables(string) {
    const result = []
    const counter = string.match(/cabbage|carrot|celery|cucumber|mushroom|onion|pepper|potato|tofu|turnip/g).reduce((all, vegetagles) => {
        all[vegetagles] = (all[vegetagles] || 0) + 1
        return all
    }, {})
    for (let i in counter) {
        result.push([counter[i], i])
    }
    return result.sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1]))
}