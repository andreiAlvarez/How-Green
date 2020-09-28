//Examples: 
a = [79, 35, 54, 19, 35, 25]
make_valley(a) --> [79, 35, 25, *19*, 35, 54]
The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
79..................54
    35..........35
        25. 
          ..19

a = [67, 93, 100, -16, 65, 97, 92]
make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
100.........................97
    93..........
               .........92
        67......
               .....65
            -16     

a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
The bottom is -82, left wing is [100, 68, 55, 38, 12]], right wing is [*-82*, 12, 46, 66, 72].

a = [14,14,14,14,7,14]
make_valley(a) => [14, 14, 14, *7*, 14, 14]

a = [14,14,14,14,14]
make_valley(a) => [14, 14, *14*, 14, 14]


// Solution One 

const makeValley = arr => {
    let arrOne=[],arrTwo=[];
    let sorted=arr.slice().sort((a,b)=>a-b);
    for (let i=0;i<arr.length;i++){
    arrOne.push(sorted.pop());
    arrTwo.push(sorted.pop());
    }
    return (arrOne.concat(arrTwo.sort((a,b)=>a-b))).filter(v=>v!=undefined)
};

// Clever

const makeValley = a => [...a.sort((a, b,) => b - a).slice().filter((_, i) => !(i % 2)), ...a.slice().filter((_, i) => i % 2).reverse()]; 
