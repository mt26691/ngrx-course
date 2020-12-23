import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState } from "./reducers/course.reducers";

import * as fromCourses from './reducers/course.reducers';


export const selectCoursesState = createFeatureSelector<CourseState>('courses');

export const selectAllCourses = createSelector(
    selectCoursesState,
    (state) => fromCourses.selectAll(state)
);

export const selectBeginnerCourses = createSelector(selectAllCourses, courses => courses.filter(t => t.category === 'BEGINNER'));
export const selectAdvancedCourses = createSelector(selectAllCourses, courses => courses.filter(t => t.category === 'ADVANCED'));
export const selectPromoTotal = createSelector(selectAllCourses, courses => courses.filter(t => t.promo).length);
export const areCoursesLoaded = createSelector(selectCoursesState, state => state.allCoursesLoaded);