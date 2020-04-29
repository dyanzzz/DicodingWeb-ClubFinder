import "../component/search-bar.js";
import "../component/club-list.js"
import DataSource from "../data/data-source.js";

const main = () => {
    //const buttonSearchElement = document.querySelector("#searchButtonElement");
    const searchElement = document.querySelector("search-bar");
    //const clubListElement = document.querySelector("#clubList");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
            
        //const dataSource = new DataSource(renderResult, fallbackResult);
        //dataSource.searchClub(searchElement.value);
    };

    const renderResult = results => {
        /*clubListElement.innerHTML = "";
        results.forEach( club => {
            //const name = club.name;
            //const fanArt = club.fanArt;
            //const description = club.description;
            const {name, fanArt, description} = club

            const clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            //clubElement.innerHTML = '<img class="fan-art-club" src="' + fanArt + '" alt="Fan Art">\n' +
            //    '<div class="club-info">\n' +
            //    '<h2>' + name + '</h2>\n' +
            //    '<p>' + description + '</p>' +
            //    '</div>';

            clubElement.innerHTML = `
                <img class="fan-art-club" src="${fanArt}" alt="Fan Art"/>
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>
            `;

            clubListElement.appendChild(clubElement);
        })*/

        clubListElement.clubs = results;
    };

    const fallbackResult = message => {
        //clubListElement.innerHTML = "";
        //clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
        //clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
        clubListElement.renderError(message)
    };

    //buttonSearchElement.addEventListener("click", onButtonSearchClicked);
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;