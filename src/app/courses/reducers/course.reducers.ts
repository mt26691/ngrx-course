import { state } from '@angular/animations';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createReducer,
    createSelector,
    MetaReducer,
    on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { CourseActions } from '../action-types';
import { compareCourses, Course } from '../model/course';

export interface CourseState extends EntityState<Course> {
    allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({ sortComparer: compareCourses, selectId: course => course.id });



export const initialCoursestate = adapter.getInitialState({ allCoursesLoaded: false });

export const courseReducer = createReducer(
    initialCoursestate,
    on(CourseActions.allCoursesLoaded, (state, action) => {
        return adapter.addAll(action.courses, {...state, allCoursesLoaded: true});
    }),
    on(CourseActions.courseUpdated, (state, action) => {
        return adapter.updateOne(action.update, state);
    }),

);

export const { selectAll } = adapter.getSelectors();

export const metaReducers: MetaReducer<CourseState>[] = !environment.production ? [] : [];