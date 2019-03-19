import axios from 'axios';
import { ChannelConfigInterface } from '../http/config';

export interface ChannelInterface {
    getRequest(path: string) : Promise<any>
}

export class Channel implements ChannelInterface {
    config: ChannelConfigInterface;

    constructor(config: ChannelConfigInterface) {
        this.config = config;
    }

    public async getRequest(path: string) : Promise<any> {
        const params = { timeout: this.config.timeout() };

        const [error, response] = await axios.get(`${this.config.host}${path}`, params)
            .then(data => [null, data])
            .catch(err => [err]);

        if (error) {
            console.log(error);
            return null;
        }
        
        return response.data;
    }
}
