let nums = [1, 2, 3, 4, 6, 7];

let result = nums.filter(n => n % 2 === 0)
                 .map(k => {
                     console.log(k); // Logs each `k` value
                     return k + 2;
                 })
                 .reduce((a, b) => a + b);

console.log(result);
console.log("Hellow World")



            
    
