import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, filter, map, tap } from "rxjs/operators";
import { CourseActions } from "./action-types";
import { CoursesHttpService } from "./services/courses-http.service";

@Injectable()
export class CoursesEffect {

    loadCourses$ = createEffect(() => this.action$.pipe(ofType(CourseActions.loadAllCourses), concatMap(action => this.coursesHttpService.findAllCourses()),
        map(courses => CourseActions.allCoursesLoaded({ courses: courses }))));

    saveCourse$ = createEffect(() => this.action$.pipe(ofType(CourseActions.courseUpdated), concatMap(action => this.coursesHttpService.saveCourse(action.update.id, action.update.changes))), { dispatch: false });

    constructor(private action$: Actions, private router: Router, private coursesHttpService: CoursesHttpService) {
    }
}