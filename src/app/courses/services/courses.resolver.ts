

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { filter, first, map, tap } from "rxjs/operators";
import { Lesson } from "../model/lesson";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CourseEntityService } from "./courses.entity.service";


@Injectable()
export class CoursesResolver implements Resolve<boolean> {

    loading = false;
    constructor(private coursesService: CourseEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.coursesService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.coursesService.getAll();
                    }
                }),
                filter(loaded => !!loaded),
                first()
            );

    }

}
