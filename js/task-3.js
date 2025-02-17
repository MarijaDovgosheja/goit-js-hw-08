function checkForSpam(message) {
  // Переводимо рядок у нижній регістр для перевірки незалежно від регістру символів
  const lowerCaseMessage = message.toLowerCase();

  // Перевіряємо наявність заборонених слів
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

// Перевірка функції
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get the best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam")); // true
console.log(checkForSpam("Get rid of SPAM emails. Our book is on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
