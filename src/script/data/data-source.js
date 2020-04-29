//1 : function
/*function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}*/

/*DataSource.prototype.searchClub = function(keyword) {
    const filteredClubs = clubs.filter( club => club.name.toUpperCase().includes(keyword.toUpperCase()));

    if (filteredClubs.length) {
        this.onSuccess(filteredClubs);
    } else {
        //this.onFailed(keyword + " is not found");
        this.onFailed(`${keyword} is not found`);
    }
};*/

//2 : class
/*class DataSource {
    constructor(onSuccess, onFailed){
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }

    searchClub(keyword){
        const filteredClubs = clubs.filter( club => club.name.toUpperCase().includes(keyword.toUpperCase()));
        if (filteredClubs.length) {
            this.onSuccess(filteredClubs);
        } else {
            this.onFailed(`${keyword} is not found`);
        }
    }
}*/

//3 : promise
import clubs from './clubs.js';
//import { response } from 'express';

class DataSource{
    static searchClub(keyword){
        //return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.teams){
                return Promise.resolve(responseJson.teams);
            }else{
                return Promise.reject(`${keyword} is not found`);
            }
        })
        /*return new Promise((resolve, reject)=>{
            const filteredClubs = clubs.filter( club => club.name.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} is not found`);
            }
        })*/
    }
}

export default DataSource;