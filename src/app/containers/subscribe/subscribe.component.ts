
import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, Subscription, finalize, take, tap } from 'rxjs';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[
    AsyncPipe
  ]
})
export class SubscribeComponent implements OnDestroy {
    public timerService = inject(TimerService);
    public timer$?: Observable<number>;
    public timerClick$?: Observable<number>;
    public timer10Time$?: Observable<number>;
    public timerTsSubscription?: Subscription;

    constructor() {
        this.timer$ = this.getTimer('all');
        this.timer10Time$ = this.getTimer('all').pipe(take(10));
        this.timerTsSubscription = this.getTimer('interne').pipe(
//            takeUntilDestroyed(),
            tap((indice)=> console.log('interne', indice))
        ).subscribe();
    }

    ngOnDestroy(): void {
        if (this.timerTsSubscription){
            this.timerTsSubscription.unsubscribe();
        }
    }

    public go() {
        this.timerClick$ = this.getTimer('click');
    }

    public stop() {
        this.timerClick$ = undefined;
    }

    private getTimer(label: string): Observable<number> {
        return this.timerService.getTimer().pipe(
            finalize(() => console.log('end', label))
        );
    }
}
