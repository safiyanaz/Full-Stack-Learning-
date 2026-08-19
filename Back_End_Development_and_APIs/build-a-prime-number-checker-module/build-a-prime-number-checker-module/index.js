function isPrime(num){
    // Numbers less than or equal to 1 are not prime
  if (num <= 1) return false;
  
  // 2 is the only even prime number
  if (num === 2) return true;
  
  // Exclude all other even numbers
  if (num % 2 === 0) return false;
  
  // Check odd factors up to the square root of the number
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  
  return true;

}

module.exports = {
    isPrime
}