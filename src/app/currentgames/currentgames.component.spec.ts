import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentgamesComponent } from './currentgames.component';

describe('CurrentgamesComponent', () => {
  let component: CurrentgamesComponent;
  let fixture: ComponentFixture<CurrentgamesComponent>;

  beforeEach(asletync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
