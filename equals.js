export default function equals(a, b){
const links1 = new Set();
const links2 = new Set();
let same1 = false;
let same2 = false;

const equalsInternal = function(arg1, arg2){
    if (!links1.has(arg1)){
	links1.add(arg1);
    } else {
	console.log("arg1 same");
	same1 = true;
    }
    if (!links2.has(arg2)){
	links2.add(arg2);
    } else {
	console.log("arg2 same");
	same2 = true;
    }
    if (same1 && same2){
	same1 = false;
	same2 = false;
	return true;
    }
    console.log(links1);
    console.log(links2);
    if (typeof arg1 !== typeof arg2){
        return false;
    }
    if (Array.isArray(arg1) && !Array.isArray(arg2) || Array.isArray(arg2) && !Array.isArray(arg1)){
        return false;
    }
    if (arg1 === null && arg2 === null){
        return true;
    }
    if (Array.isArray(arg1) && Array.isArray(arg2)){
        console.log("I GOT ARRAYS");
        if (arg1.length !== arg2.length){
            return false;
        }
        let arr1 = arg1;
        let arr2 = arg2
        for (let i = 0; i < arr1.length; i++){
            if (!equalsInternal(arr1[i], arr2[i])){
                return false;    
            }
        }
        return true;
    }
    if(typeof arg1 === "object" && typeof arg1 === "object"){
        console.log("I GOT OBJECTS");
        let obj1 = arg1;
        let obj2 = arg2;
        if (Object.keys(obj1).length !== Object.keys(obj2).length){
            console.log("Длины разные");
            return false;
        }
        if (!Object.keys(obj1).every(item => obj2.hasOwnProperty(item))){
            console.log("wrong keys");
            return false;
        }
        return Object.keys(obj1).every(item => equalsInternal(obj1[item], obj2[item]));
    }
    if (typeof arg1 === "number" && typeof arg2 === "number" && isNaN(arg1) && isNaN(arg2)){
        return true;
    }
    return arg1 === arg2;
}

return equalsInternal(a, b);

}

let s1 = Symbol();
let s2 = Symbol();

const objkt = { d : 'DDD', in : null};
objkt.in = objkt;

---

const objkt = { d : 'DDD', in : null, asd : "asd"};
objkt.in = objkt;

const objkt2 = { d : 'DDD', in : null, asd : "asd"};
objkt2.in = objkt2;

---

const objkt = { d : 'DDD', in : null, asd : "asd"};
objkt.in = objkt;

const objkt2 = { d : 'DDD', in : null, asd : "as"};
objkt2.in = objkt2;


equals(objkt, objkt2);

---



equals(15, 15);
equals(0, 0);
equals(-0, -0);
equals(0, "0");
equals(NaN, NaN);
equals(NaN, "NaN");
equals(-Infinity, NaN);
equals(Infinity, Infinity);
equals(-Infinity, -Infinity);
equals(Number.MAX_VALUE, Number.MAX_VALUE);
equals(true, true);
equals(true, false);
equals(false, false);
equals(undefined, undefined);
equals(undefined, null);
equals(null, null);
equals([], []);
equals([1, 2], [1, 2]);
equals([1, 2, 3], [1, 2]);
equals([1, 2, 3], [1, 2, 3]);
equals([1, 2, 3, []], [1, 2, 3, []]);
equals([1, 2, 3, [[1], [2]], [1, 2, 3, [[1], [2]]);
equals([1, 2, 3, [[1], [2]]], [1, 2, 3, [[1], [2]]]);
equals([1, 2, 3, [[1], [2, 3]]], [1, 2, 3, [[1], [2, 3]]]);
equals([], {});
equals({}, {});
equals({1:1}, {1:1});
equals({1 : [1, 2]}, {1 : [1, 2, 3]});
equals([{1:2, 5:"234", 3:[5, 3, "asd", {5:2, 7:2, 7:[5, 6]}]}], [{1:2, 5:"234", 3:[5, 3, "asd", {5:2, 7:2, 7:[5, 6]}]}]);
equals([{1:2, 5:"234", 3:[5, 3, "asd", {5:2, 7:2, 7:[5, 6]}]}], [{1:2, 5:"234", 3:[5, 3, "asd", {5:2, 7:2, 7:[5, 6, 7]}]}]);
equals({b: 13, a: 4, ak: [1, 2,[2,[2,[[9, {c: 9, l: {g: [5, true, {}]}}]]]]]}, {b: 13, a: 4, ak: [1, 2,[2,[2,[[9, {c: 9, l: {g: [5, true, {}]}}]]]]]});
equals({a: undefined}, {b:null});
equals(undefined, 42);