import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterblockComponent } from './twitterblock.component';

describe('TwitterblockComponent', () => {
  let component: TwitterblockComponent;
  let fixture: ComponentFixture<TwitterblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
