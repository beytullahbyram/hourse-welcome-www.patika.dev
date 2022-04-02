const buton = document.getElementById('ekle');
const input = document.getElementById('input');
const ul = document.getElementById('list');
const toast = document.querySelectorAll('.toast-body')

buton.addEventListener('click', add)
function add() {

    if (input.value.length == 0)
        console.log('bos mesaj');

    else if (input.value.replace(/\s+/g, '').length == 0) {
        console.log('bosluklu mesaj');

    } else if (input.value.length > 0) {
        let li = document.createElement('li')
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn-danger')
        deleteBtn.setAttribute('id', 'delete-btn')
        li.innerHTML = `<li class="li-item">${input.value}</li>`
        deleteBtn.innerText = `SİL`
        li.appendChild(deleteBtn)
        ul.appendChild(li)
        localStorageKaydet(input.value)
    }

}

ul.addEventListener('click', Completed)
function Completed(){
document.querySelectorAll('.btn-danger').forEach(item =>{ 
    item.addEventListener('click',event =>{
        event.target.parentElement.remove()
    })
})
}

function localStorageKaydet(value){
    let newValue;
    if (localStorage.getItem('newValue') === null) newValue = [];
    else {
        newValue = JSON.parse(localStorage.getItem('newValue'))
    }
    newValue.push(value);
    localStorage.setItem('newValue', JSON.stringify(newValue));
}

document.querySelectorAll('.ul-item').forEach(item =>{
    item.addEventListener('click',event =>{
        event.target.classList.add('gorev-tamamlandi')
    })
})








// function Completed(e) {
//     if (e.target.classList.value == 'btn-danger') {
//         e.target.parentElement.remove()
//         toast[0].innerText = 'BAŞARILI İLE SİLİNDİ'

//         $(document).ready(function () {
//             $('.toast').toast('show');
//         });
//         localStorageSil()
//     } else {
//         e.target.classList.add('gorev-tamamlandi')
//         toast[0].innerText = 'BAŞARILI İLE TAMAMLANDI'
//         $(document).ready(function () {
//             $('.toast').toast('show');
//         });

//     }
// }
// const localStorageSil = value => {

// }