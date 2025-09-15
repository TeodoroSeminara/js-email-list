const generateEmail = "https://flynn.boolean.careers/exercises/api/random/mail";
const insertEmail = document.getElementById("mail-generate");
const btnGenerate = document.getElementById("btn-generate")

randomMail();

btnGenerate.addEventListener("click",
    function () {
        insertEmail.innerHTML = "";
        randomMail();

    }
);



function randomMail() {
    for (let i = 0; i < 10; i++) {
        axios.get(generateEmail).then(response => {
            // let result = response.data.response;
            insertEmail.innerHTML += `<li>${response.data.response}</li>`;
            // Esempio con appendchild
            //  const email = res.data.response;
            // const li = document.createElement("li");
            // li.textContent = email;
            // insertEmail.appendChild(li);
        })
    }

};
