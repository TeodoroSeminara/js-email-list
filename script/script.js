const generateEmail = "https://flynn.boolean.careers/exercises/api/random/mail";
const insertEmail = document.getElementById("mail-generate");

for (let i = 0; i < 10; i++) {
    let newMail = randomMail();
    insertEmail.innerHTML = `<li>${insertEmail}</li>`;
    console.log("questa è la mail", newMail);



}




function randomMail() {
    axios.get(generateEmail)
        .then(rispApi => {

            const result = rispApi.data.response;
            console.log(result);
            // insertEmail.appendChild(document.createElement("li"));
            // const [emailGenerated] = result;

        })
        .catch(error => {
            // codice da eseguire in caso di errore
            console.error(error)
        });
}