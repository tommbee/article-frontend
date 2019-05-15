import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import axios from 'axios';
import { ChannelConfigInterface } from '../http/config';

interface ChannelInterface {
    getRequest(path: string) : Promise<any>
}

@injectable()
class Channel implements ChannelInterface {
    
    private _config: ChannelConfigInterface;

    constructor(
        @inject(TYPES.ChannelConfigInterface) _config: ChannelConfigInterface,
    ) {
        this._config = _config;
    }

    public async getRequest(path: string) : Promise<any> {
        const params = { timeout: this._config.timeout() };

        const [error, response] = await axios.get(`${this._config.host()}${path}`, params)
            .then(data => [null, data])
            .catch(err => [err]);

        if (error) {
            console.log(error);
            return null;
        }
        
        return response.data;
    } 
}

export { ChannelInterface, Channel }
