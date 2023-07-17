import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorhipPage } from './worhip.page';

describe('WorhipPage', () => {
  let component: WorhipPage;
  let fixture: ComponentFixture<WorhipPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorhipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
