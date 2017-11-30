import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from '../../@theme/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { DemoTableComponent } from './demo-table.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReportService } from '../../@core/data/report.service';
import { Observable } from 'rxjs/Observable';
import { Data } from '../../@core/data/data';

import 'rxjs/add/observable/of';

describe('DemoTableComponent', () => {
  let component: DemoTableComponent;
  let fixture: ComponentFixture<DemoTableComponent>;
  let service: ReportService;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTableComponent, SpinnerComponent, SearchBarComponent ],
      imports: [InfiniteScrollModule, HttpClientModule, FormsModule],
      providers: [ReportService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTableComponent);
    component = fixture.componentInstance;
	  service = fixture.debugElement.injector.get(ReportService);
	  spy = spyOn(service, 'getDemo').and.returnValue(Observable.of({content:[], totalElements: 0, numberOfElements: 0} as Data));
    fixture.detectChanges();
  });

  it('should create demo table', () => {
    expect(component).toBeTruthy();
  });

  it('should get \'0 of 0\' on the Card footer by Spy function', async(() => {
  	fixture.whenStable().then(() => {
  		const compiled = fixture.debugElement.nativeElement;
    	expect(compiled.querySelector('.card-footer').textContent).toBe("0 of 0");
  	});
  }));
});
