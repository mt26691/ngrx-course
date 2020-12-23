

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { map } from "rxjs/operators";
import { Lesson } from "../model/lesson";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesEntityService } from "./courses.entity.service";


@Injectable()
export class CoursesResolver implements Resolve<boolean> {

    loading = false;
    constructor(private coursesService: CoursesEntityService) {

    }


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.coursesService.getAll().pipe(map(courses => !!courses));
    }


}
