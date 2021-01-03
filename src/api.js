const base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`
    }else{
        return month
    }    
}
const getCurrentDay = () => {
    const day = new Date().getDate()
    if(day < 10){
        return `0${day}`
    }else{
        return day
    }    
}
//Current day, month, year 

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


//Popular games
const popular_games = (size) =>  `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=${size}`;
const upcoming_games = (size) => `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=${size}`;
const new_games = (size) => `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=${size}`;
//List of games URLs
export const popularGamesURL = (size) => `${base_url}${popular_games(size)}`;
export const upcomingGamesURL = (size) => `${base_url}${upcoming_games(size)}`;
export const newGamesURL = (size ) => `${base_url}${new_games(size)}`;
export const searchGamesURL = (game_name, size) => `${base_url}games?search=${game_name}&page_size=${size}`;
//Details URL
export const gameDetailURL = (game_id) => `${base_url}games/${game_id}`;
//ScreenShots
export const gameScreenshotsURL = (game_id) => `${base_url}games/${game_id}/screenshots`;
