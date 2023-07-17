import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChosenPage } from './chosen.page';

describe('ChosenPage', () => {
  let component: ChosenPage;
  let fixture: ComponentFixture<ChosenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
