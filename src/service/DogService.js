import axios from "axios";

export class DogService {

static async fetchAll(){
    const response = await axios.get('http://localhost:8000/api/dogs');
    console.log('reponse', response);
    return response.data;
}

}