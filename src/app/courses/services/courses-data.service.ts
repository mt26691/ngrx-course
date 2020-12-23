import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Course } from '../model/course';


@Injectable()
export class CoursesDataService extends DefaultDataService<Course> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('Course', http, httpUrlGenerator);
    }

    getAll(): Observable<Course[]> {
        return this.http.get('/api/courses').pipe(map(res => res['payload']));
    }
}