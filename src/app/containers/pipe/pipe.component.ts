import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { TimerService } from '../../services/timer.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[
    ReactiveFormsModule,
    AsyncPipe
  ]

})
export class PipeComponent {

    public timerService = inject(TimerService);
    public form: FormGroup;
    public timer$?: Observable<number>
    constructor(
        private fb: FormBuilder
        ){
        this.form = fb.group({
            timer: fb.control(null)
        });
        this.timer$ = this.timerService.getTimer();
    }

    public go() {
    }

    public stop() {

    }
}
