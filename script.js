let btn = document.getElementById('btn');
let code_img = document.getElementById('code-img');


document.getElementById('btn').onclick = function () {
  let input = document.getElementById('input').value;
  let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
  code_img.src = api;
};