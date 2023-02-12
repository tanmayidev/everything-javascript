function memoizeAddTo256() {
    var cache = {};

    return function(num) {
        if(num in cache) {
            console.log("Cached Value");
            return cache[num];
        }
        else {
            console.log("Normal Value");
            cache[num] = num + 256;
            return cache[num];
        }
    }
}

var memoizedFunc = memoizeAddTo256();

memoizedFunc(20); // Normal Value
memoizedFunc(20); // Cached Value


/**
 * FIBONACCI USING MEMOIZATION
 * 
    function fib(n)
    {
        let term = new Array(1000);
        term.fill(0);
 
        // base case
        if (n <= 1)
            return n;
 
        if (term[n] != 0)
            return term[n];
 
        else
        {
            term[n] = fib(n - 1) + fib(n - 2);
            return term[n];
        }
    }
 
    let n = 6;
    console.log(fib(n));
 * 
 * 
 */
