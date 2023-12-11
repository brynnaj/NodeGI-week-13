const args = process.argv.slice(2); // contains command line arguments and slices off first 2 
const sum = args.reduce((acc, val) => acc + Number(val), 0);
console.log(sum);