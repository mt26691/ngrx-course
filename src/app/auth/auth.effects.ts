import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { AuthActions } from "./action-types";

@Injectable()
export class AuthEffects {

    constructor(private action$: Actions) {
        action$.subscribe(action => {
            if (action.type === AuthActions.login.type) {
                localStorage.setItem('user', JSON.stringify(action['user']));
            }
        });
    }
}