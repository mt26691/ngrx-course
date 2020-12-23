import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, filter, map, tap } from "rxjs/operators";
import { CourseActions } from "./action-types";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CoursesEffect {

    // login$ = createEffect(() => this.action$.pipe(ofType(AuthActions.login), tap(action => {
    //     localStorage.setItem('user', JSON.stringify(action.user));
    // })), { dispatch: false });

    loadCourses$ = createEffect(() => this.action$.pipe(ofType(CourseActions.loadAllCourses), concatMap(action => this.coursesHttpService.findAllCourses()),
        map(courses => CourseActions.allCoursesLoaded({ courses: courses }))));

    constructor(private action$: Actions, private router: Router, private coursesHttpService: CoursesHttpService) {

        // // createEffect(() => this.action$.pipe(ofType(AuthActions.login), tap(action => {
        // //     localStorage.setItem('user', JSON.stringify(action.user));
        // // })));

        // // const login$ = this.action$.pipe(ofType(AuthActions.login), tap(action => {
        // //     localStorage.setItem('user', JSON.stringify(action.user));
        // // }));

        // // login$.subscribe();
    }
}