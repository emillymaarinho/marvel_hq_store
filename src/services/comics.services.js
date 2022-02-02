import { data } from "./data"
import CryptoJS from "crypto-js"
const ENV = 'production';
const BASE_URL = 'https://gateway.marvel.com/v1/public/comics'

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY

const getAllComics = async (page, pageSize) => {
    if (ENV === 'development') {
        return data;
    }
    const offset = (page - 1) * pageSize;
    const timeStamp = new Date().getTime();
    const md5Hash = CryptoJS.MD5(timeStamp + PRIVATE_KEY + PUBLIC_KEY);

    let query = `?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${md5Hash}&offset=${offset}`

    const response = await fetch(`${BASE_URL}${query}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    });
    return response.json();

}

export { getAllComics }