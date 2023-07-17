import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadPage } from './head.page';

describe('HeadPage', () => {
  let component: HeadPage;
  let fixture: ComponentFixture<HeadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
