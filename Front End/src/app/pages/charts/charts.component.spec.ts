import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartModule } from 'angular2-chartjs';
import { ChartsComponent } from './charts.component';

describe('ChartComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsComponent ],
      imports: [ChartModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create charts', () => {
    expect(component).toBeTruthy();
  });

  it('should have two <canvas> tag',() => {
  	const compiled = fixture.debugElement.nativeElement;
  	expect(compiled.querySelectorAll('canvas').length).toBe(2);
  });
});
