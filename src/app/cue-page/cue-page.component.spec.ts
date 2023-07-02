import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuePageComponent } from './cue-page.component';

describe('CuePageComponent', () => {
  let component: CuePageComponent;
  let fixture: ComponentFixture<CuePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuePageComponent]
    });
    fixture = TestBed.createComponent(CuePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
