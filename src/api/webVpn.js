import axios from "axios"
import {
    webVpnPath
} from './config';

const webVpn = async (username, password, callback) => {
    let rp = await axios.post(webVpnPath, {
        username,
        password
    }, {
        timeout: 120000
    }).catch((e) => {
        /*将最新内容存储。。。*/
        callback({
            status: 500
        });
    });
    callback(rp);
}

export default webVpn;