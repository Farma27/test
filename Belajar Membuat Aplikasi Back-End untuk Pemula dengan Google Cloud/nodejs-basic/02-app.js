// process.env
/* 
const server = new Server({
   host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
}); 
*/

// process.memoryUsage()
const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);

// process.argv
const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);