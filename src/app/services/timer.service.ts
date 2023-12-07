import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TimerService {
    public getTimer(): Observable<number> {
        return interval(1000);
    }
}
