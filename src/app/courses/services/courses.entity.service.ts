

import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { map } from "rxjs/operators";
import { Lesson } from "../model/lesson";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";


@Injectable()
export class CoursesEntityService extends EntityCollectionServiceBase<Course> {

    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Course', serviceElementFactory);
    }
}
