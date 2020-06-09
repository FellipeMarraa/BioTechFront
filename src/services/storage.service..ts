import {Injectable} from '@angular/core';
import {LocalUser} from '../models/local_user';
import {STORAGE_KEYS} from '../config/storage_keys.config';

@Injectable()
export class StorageService {

    getLocalUser(): LocalUser {
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user == null) {
            return null;
        } else {
            return JSON.parse(user);
        }
    }

    setLocalUser(id_categoria: string) {
        if (id_categoria == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        } else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(id_categoria));
        }
    }


}
