import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, tap } from "rxjs/operators";
import { AuthActions } from "./action-types";

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this.action$.pipe(ofType(AuthActions.login), tap(action => {
        localStorage.setItem('user', JSON.stringify(action.user));
    })), { dispatch: false });

    logout$ = createEffect(() => this.action$.pipe(ofType(AuthActions.logout), tap(action => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
    })), { dispatch: false });
    
    constructor(private action$: Actions, private router: Router) {

        // createEffect(() => this.action$.pipe(ofType(AuthActions.login), tap(action => {
        //     localStorage.setItem('user', JSON.stringify(action.user));
        // })));

        // const login$ = this.action$.pipe(ofType(AuthActions.login), tap(action => {
        //     localStorage.setItem('user', JSON.stringify(action.user));
        // }));

        // login$.subscribe();
    }
}