// 1. Create the initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// 2. destrnuctivelyAppendCat(name)
function destructivelyAppendCat(name) {
    cats.push(name);
}

// 3. destructivelyPrependCat(name)
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// 4. destructivelyRemoveLastCat()
function destructivelyRemoveLastCat() {
    cats.pop();
}

// 5. destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// 6. appendCat(name) - non-destructive
function appendCat(name) {
    return [...cats, name];
}

// 7. prependCat(name) - non-destructive
function prependCat(name) {
    return [name, ...cats];
}

// 8. removeLastCat() - non-destructive
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

// 9. removeFirstCat() - non-destructive
function removeFirstCat() {
    return cats.slice(1);
}

