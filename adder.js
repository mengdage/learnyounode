var len = process.argv.length,
    i,
    sum,
    value;
for(i = 2, sum=0; i < len; i+=1) {
  value = process.argv[i];
  sum += +value;
}


console.log(sum);
