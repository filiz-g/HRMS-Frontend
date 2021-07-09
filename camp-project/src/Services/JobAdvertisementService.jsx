import axios from "axios";

export default class JobAdvertisementService {

    getJobAdvertisements() {

        return axios.get("http://localhost:8080/api/jobAdvertisement/getAll")
    }

    add(values) {


        return axios.post("http://localhost:8080/api/jobAdvertisement/add")
}
}