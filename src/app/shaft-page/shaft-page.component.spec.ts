import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaftPageComponent } from './shaft-page.component';

describe('ShaftPageComponent', () => {
  let component: ShaftPageComponent;
  let fixture: ComponentFixture<ShaftPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShaftPageComponent]
    });
    fixture = TestBed.createComponent(ShaftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
