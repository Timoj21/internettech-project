import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MuscleGroup } from '../models/exercise.models';

@Injectable({
    providedIn: 'root',
})

export class ExerciseService {
    BASE_URL: string = environment.exerciseApiUrl;

    constructor(protected http: HttpClient) {}

    getExerciseGroups(

    ): Observable<any> {
        let url = `${this.BASE_URL}/musclegroups`;
        return this.http.get<any>(url);
    }

    getExercises(

    ): Observable<any> {
        let url = `${this.BASE_URL}/exercises`;
        return this.http.get<any>(url);
    }
}