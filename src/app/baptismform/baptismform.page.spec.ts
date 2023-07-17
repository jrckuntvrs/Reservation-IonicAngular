import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaptismformPage } from './baptismform.page';

describe('BaptismformPage', () => {
  let component: BaptismformPage;
  let fixture: ComponentFixture<BaptismformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BaptismformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
