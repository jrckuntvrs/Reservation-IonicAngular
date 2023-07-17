import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlessingformPage } from './blessingform.page';

describe('BlessingformPage', () => {
  let component: BlessingformPage;
  let fixture: ComponentFixture<BlessingformPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlessingformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
