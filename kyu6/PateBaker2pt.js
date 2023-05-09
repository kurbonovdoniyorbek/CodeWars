function getMissingIngredients(recipe, added) {
    let max = 0, res = {};
    for (let item in recipe) {
        if (item in added)
            max = Math.max(Math.ceil(added[item] / recipe[item]), max);
    }
    if (max == 0)
        return recipe;
    for (let item in recipe) {
        if (!(item in added))
            res[item] = max * recipe[item];
        else if (added[item] < max * recipe[item])
            res[item] = max * recipe[item] - added[item];
    }
    return res;
}
var recipe = { flour: 200, eggs: 1, sugar: 100 };

getMissingIngredients(recipe, { flour: 50, eggs: 1 }); // must return {flour: 150, sugar: 100}
getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}
getMissingIngredients(recipe, { flour: 500, sugar: 200 }); // must return {flour: 100, eggs: 3, sugar: 100}