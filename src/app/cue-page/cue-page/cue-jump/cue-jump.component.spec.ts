import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CueJumpComponent } from './cue-jump.component';

describe('CueJumpComponent', () => {
  let component: CueJumpComponent;
  let fixture: ComponentFixture<CueJumpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CueJumpComponent]
    });
    fixture = TestBed.createComponent(CueJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
