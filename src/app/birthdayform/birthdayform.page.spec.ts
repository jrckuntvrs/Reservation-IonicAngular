import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirthdayformPage } from './birthdayform.page';

describe('BirthdayformPage', () => {
  let component: BirthdayformPage;
  let fixture: ComponentFixture<BirthdayformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BirthdayformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
