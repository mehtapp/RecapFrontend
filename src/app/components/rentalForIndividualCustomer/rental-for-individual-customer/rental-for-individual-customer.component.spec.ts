import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalForIndividualCustomerComponent } from './rental-for-individual-customer.component';

describe('RentalForIndividualCustomerComponent', () => {
  let component: RentalForIndividualCustomerComponent;
  let fixture: ComponentFixture<RentalForIndividualCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalForIndividualCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalForIndividualCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
