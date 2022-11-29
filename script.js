// TODO: add code here
window.addEventListener("load", function () {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {

            json.sort(function (a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });

            document.getElementById("container").innerHTML = `<h1>Total astronaut: ${json.length}</h1>`;
            for (let i = 0; i < json.length; i++) {
                const destination = document.getElementById("container");
                let skills = json[i].skills.join(", ");

                let color = json[i].active ? 'style="color:green"' : ''
                destination.innerHTML += `
                 <div class="astronaut">
                 <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li ${color}>Active: ${json[i].active}</li>
                    <li>Skills: ${skills}</li>
                 </ul>
                 
                 </div>
                 <img class="avatar" src=${json[i].picture}></img>
           </div>
        `;
            }

        });
    });

});