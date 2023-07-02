import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CueBreakingComponent } from './cue-breaking.component';

describe('CueBreakingComponent', () => {
  let component: CueBreakingComponent;
  let fixture: ComponentFixture<CueBreakingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CueBreakingComponent]
    });
    fixture = TestBed.createComponent(CueBreakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
