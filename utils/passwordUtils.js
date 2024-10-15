export const generatePasswords = (settings) => {
    const { length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars, quantity } = settings;
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+[]{}|;:,.<>?';
    let charSet = '';
    if (includeUppercase) charSet += upper;
    if (includeLowercase) charSet += lower;
    if (includeNumbers) charSet += numbers;
    if (includeSpecialChars) charSet += special;
  
    if (!charSet) {
      console.error("No character types selected.");
      return ["Please select at least one character type"];
    }
  
    const shuffle = (string) => {
      const array = string.split('');
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array.join('');
    };
  
    const passwords = [];
    for (let i = 0; i < quantity; i++) {
      let password = '';
  
      if (includeUppercase) password += upper[Math.floor(Math.random() * upper.length)];
      if (includeLowercase) password += lower[Math.floor(Math.random() * lower.length)];
      if (includeNumbers) password += numbers[Math.floor(Math.random() * numbers.length)];
      if (includeSpecialChars) password += special[Math.floor(Math.random() * special.length)];
  
      for (let j = password.length; j < length; j++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
      }
  
      passwords.push(shuffle(password));
    }
  
    return passwords;
  };
  