import { baseUrl } from "/src/scripts/variables.js"

async function getUser(userName){
    //essa API faz com que o número de requisições do usuario seja "Burlada" , e que não tenha número máximo de requisições 
    const response = await fetch (`https://api.allorigins.win/get?url=${baseUrl}/${userName}`)
    const result = await response.json()
    // console.log('result', JSON.parse(result.contents));
    //json.parse pega uma coisa que vem em stringfy e transforma em objeto, ou seja, vai pegar um string em objeto
    return JSON.parse(result.contents)
}

export { getUser }