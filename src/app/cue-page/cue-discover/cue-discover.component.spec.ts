import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CueDiscoverComponent } from './cue-discover.component';

describe('CueDiscoverComponent', () => {
  let component: CueDiscoverComponent;
  let fixture: ComponentFixture<CueDiscoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CueDiscoverComponent]
    });
    fixture = TestBed.createComponent(CueDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
