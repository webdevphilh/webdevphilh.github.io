

function createElements(){

    fetch('data.json')
    .then(response => response.json())
    .then(profiles => {


    let mastersection = document.createElement("section");
    document.body.appendChild(mastersection);

    for (let i=0; i <  profiles.length; i++){
        // create div "containerDiv"
        let containerDiv = document.createElement("div");
        mastersection.appendChild(containerDiv);
        containerDiv.setAttribute("class", "profile-container");
        // insert logo
        let logoImg = document.createElement("img");
        containerDiv.appendChild(logoImg);
        logoImg.setAttribute("class", "logo");
        logoImg.alt = profiles[i].company + "  logo";
        logoImg.src = profiles[i].logo;
        // create div
        let innerDiv = document.createElement("div");
        containerDiv.appendChild(innerDiv);
            // create div = "person"
            let personDiv = document.createElement("div");
            innerDiv.appendChild(personDiv);
            personDiv.setAttribute("class", "person");
            // create p "company"
            let companyP = document.createElement("p");
            personDiv.appendChild(companyP);
            companyP.setAttribute("class", "company");
            // create spans and text
                companyP.innerText = profiles[i].company;
                if(profiles[i]["new"]){
                    companyP.innerHTML += "<span class=new > NEW! </span>";
                }
                if(profiles[i].featured){
                    companyP.innerHTML += "<span class=featured > FEATURED </span>";
                }
            // create p "position"
            let positionP = document.createElement("p");
            personDiv.appendChild(positionP);
            positionP.setAttribute("class", "position");
            positionP.innerText = profiles[i].position;
            // create div "pcl-box"
            let pclBoxDiv = document.createElement("div");
            personDiv.appendChild(pclBoxDiv);
            pclBoxDiv.setAttribute("class", "pcl-box");
            // create p "postedAt"
            let postedAtP = document.createElement("p");
            pclBoxDiv.appendChild(postedAtP);
            postedAtP.innerText = profiles[i].postedAt;
            // create p "contract"
            let contractP = document.createElement("p");
            pclBoxDiv.appendChild(contractP);
            contractP.innerText = profiles[i].contract;
            // create p "location"
            let locationP = document.createElement("p");
            pclBoxDiv.appendChild(locationP);
            locationP.innerText = profiles[i].location;
        // create div "seperator"
        let seperatorDiv = document.createElement("div");
        personDiv.appendChild(seperatorDiv);
        seperatorDiv.setAttribute("class", "seperator");
        // create div "term-box"
        let termBoxDiv = document.createElement("div");
        innerDiv.appendChild(termBoxDiv);
        termBoxDiv.setAttribute("class", "term-box");
        // create button 
            let roleP = document.createElement("button");
            termBoxDiv.appendChild(roleP);
            roleP.setAttribute("class", "search-term");
            roleP.setAttribute("onclick", "searchButton(\"" + profiles[i].role + "\")");
            roleP.innerText = profiles[i].role;

            let levelP = document.createElement("button");
            termBoxDiv.appendChild(levelP);
            levelP.setAttribute("class","search-term");
            levelP.setAttribute("onclick", "searchButton(\"" + profiles[i].level + "\")");
            levelP.innerText = profiles[i].level;

            for(let lang in profiles[i].languages){
                let languageButton = document.createElement("button");
                termBoxDiv.appendChild(languageButton);
                languageButton.setAttribute("class","search-term");
                languageButton.setAttribute("onclick", "searchButton(\"" + profiles[i].languages[lang] + "\")");
                languageButton.innerText = profiles[i].languages[lang];
            }

            for(let tool in profiles[i].tools){
                let toolButton = document.createElement("button");
                termBoxDiv.appendChild(toolButton);
                toolButton.setAttribute("class","search-term");
                toolButton.setAttribute("onclick", "searchButton(\"" + profiles[i].tools[tool] + "\")");
                toolButton.innerText = profiles[i].tools[tool];
            }
        }
    });
}