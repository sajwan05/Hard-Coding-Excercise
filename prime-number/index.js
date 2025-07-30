let n = +prompt("Enter a number: ");

for ( let i = 2; i <= n; i++) {
    if (i % 2 === 0 && i === 2) {
        console.log(`${i} is prime`);
    }
        for (j = 3; j <= n; j++) {
            if (j % i !== 0) {
                console.log(`${j} is prime`);
            }else  {
                continue;
            }
        }
    
}