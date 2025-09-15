const generateEmail = "https://flynn.boolean.careers/exercises/api/random/mail";
const insertEmail = document.getElementById("mail-generate");
const btnGenerate = document.getElementById("btn-generate")

randomMail();

btnGenerate.addEventListener("click",
    function () {
        randomMail();
        insertEmail.innerHTML = "";

    }
);



function randomMail() {
    for (let i = 0; i < 10; i++) {
        axios.get(generateEmail).then(response => {
            // let result = response.data.response;
            insertEmail.innerHTML += `<li class="list-group-item">${response.data.response}</li>`;
        })
    }

};
