function maskEmail(email) {
  const [name, domain] = email.split("@");
  const masked = name[0] + "*".repeat(name.length - 2) + name[name.length - 1];
  return masked + "@" + domain;
}

const email = "alimwanasit@gmail.com";
console.log(maskEmail(email));
