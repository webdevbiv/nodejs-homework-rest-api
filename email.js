const email = {
  from: UKR_NET_EMAIL,
  to: "xamala6878@eimatro.com",
  subject: "Verify email",
  html: "<p>Verify email</p>",
};

transport
  .sendMail(email)
  .then(() => console.log("Email send success"))
  .catch((er) => console.log(er));
