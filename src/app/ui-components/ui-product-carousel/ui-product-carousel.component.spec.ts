import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProductCarouselComponent } from './ui-product-carousel.component';

describe('UiProductCarouselComponent', () => {
  let component: UiProductCarouselComponent;
  let fixture: ComponentFixture<UiProductCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiProductCarouselComponent]
    });
    fixture = TestBed.createComponent(UiProductCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
