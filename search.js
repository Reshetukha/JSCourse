export default function search(needle, haystack){

const links = new Set();

function searchInter(needle, haystack){
    if (!links.has(haystack)){
	    links.add(haystack);
    } else {
	    return false;
    }
    if ( isNaN(needle) && isNaN(haystack) && typeof haystack === "number" && typeof haystack === "number"){
        return true;
    }
    if (needle === null && haystack === null){
        return true;
    }
    if (Array.isArray(haystack)){
        return haystack.some(item => searchInter(needle, item));
    }
    if (typeof haystack === "object"){
        let obj1 = haystack;
        return Object.keys(obj1).some(item => searchInter(needle, obj1[item]));
    }
    return needle === haystack;
}

return searchInter(needle, haystack);

}



search(1, [1]);
search(1, [5, 6]);
search(NaN, [5, 6, NaN]);
search(null, [false, null]);
search(null, [false, {1 : null}]);
search(5, { a: 3, b: 5, c: 9 }); // true
search("5", { a: 3, b: 5, c: 9 }); // false
search(5, { a: 3, b: { u: 8, '5': 'c', s: 5}, c: 9 }); // true
search(5, { a: 3, b: { u: 8, '5': 'c', s: 7}, c: 9 }); // false
search(5, { a: [1, 2, 3, 5, 7, 9], c: 8, s: 6 }); // true
search(5, { a: [1, 2, { s: 4, c: {u: 5}}, ], s: 9 }); // true