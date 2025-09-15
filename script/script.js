const generateEmail = "https://flynn.boolean.careers/exercises/api/random/mail";
const insertEmail = document.getElementById("mail-generate");



function randomMail() {
    for (let i = 0; i < 10; i++) {
        axios.get(generateEmail).then(response => {
            // let result = response.data.response;
            insertEmail.innerHTML += `<li>${response.data.response}</li>`;
        })
    }

};



randomMail();
