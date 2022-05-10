import { apolloClient } from "../../graphql";
import { GET_ALL_PHONES } from "./queries";
import { GetPhones_phones } from "./__generated__/GetPhones";

class PhoneService {
    public async getPhones(): Promise<GetPhones_phones[]> {
        const response = await apolloClient.query({ query: GET_ALL_PHONES }).catch(err => {
            throw err;
        });

        if (response && response.data && response.data.phones)
            return response.data.phones as GetPhones_phones[];
        return [];
    }
}

export default new PhoneService();