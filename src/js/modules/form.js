function form() {
  // Отправка формы в телеграмм

  const TOKEN   = "5903770777:AAHB6f183fe3t863b91H3E3MPF1li7XNBGU";
  const CHAT_ID = "-1001822122898";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  document.querySelector("#tg").addEventListener("submit", function(e) {
    e.preventDefault();

    let message = `<b>Имя:</b> ${this.name.value}\n`;
    message += `<b>Почта:</b> ${this.email.value}\n`;
    message += `<b>Сообщение:</b> ${this.text.value}\n`;

    let options = {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message
    };

    fetch(URL_API, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify(options)
    })
    .then((res) => {
      this.name.value = "";
      this.email.value = "";
      this.text.value = "";
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("111");
    });
  });

}

export {form};