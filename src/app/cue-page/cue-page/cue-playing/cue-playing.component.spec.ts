import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuePlayingComponent } from './cue-playing.component';

describe('CuePlayingComponent', () => {
  let component: CuePlayingComponent;
  let fixture: ComponentFixture<CuePlayingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuePlayingComponent]
    });
    fixture = TestBed.createComponent(CuePlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
