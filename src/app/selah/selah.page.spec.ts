import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelahPage } from './selah.page';

describe('SelahPage', () => {
  let component: SelahPage;
  let fixture: ComponentFixture<SelahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
