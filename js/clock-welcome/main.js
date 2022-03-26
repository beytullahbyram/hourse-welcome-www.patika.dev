let name=prompt('Adınızı Giriniz');
console.log(name);

let welcome = document.getElementById('welcome');
let eklenenBilgi=`<p>Merhaba, ${name}! Hoş geldin!</p>`
welcome.innerHTML =eklenenBilgi;

let clock=document.getElementById('clock');
console.log(clock);
let dateHourse=` <p> ${new Date().toLocaleTimeString()}   - ${new Date().toDateString()} </p>`
clock.innerHTML=dateHourse

let altBilgi=document.getElementById('altBilgi');
let bilgi=`tarihinde <strong>Kodluyoruz Frontend Web Development Patikası</strong> 'nın Javascript
bölümü 1.Ödevindesiniz `
altBilgi.innerHTML=bilgi

