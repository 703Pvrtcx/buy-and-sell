import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailListingPageComponent } from './detail-listing-page.component';

describe('DetailListingPageComponent', () => {
  let component: DetailListingPageComponent;
  let fixture: ComponentFixture<DetailListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailListingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
