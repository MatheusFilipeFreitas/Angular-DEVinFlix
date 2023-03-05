import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithMenuComponent } from './with-menu.component';

describe('WithMenuComponent', () => {
  let component: WithMenuComponent;
  let fixture: ComponentFixture<WithMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
