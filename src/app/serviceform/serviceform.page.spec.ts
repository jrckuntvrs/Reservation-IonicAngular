import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceformPage } from './serviceform.page';

describe('ServiceformPage', () => {
  let component: ServiceformPage;
  let fixture: ComponentFixture<ServiceformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServiceformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
