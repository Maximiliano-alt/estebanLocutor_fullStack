import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLocutorComponent } from './services-locutor.component';

describe('ServicesLocutorComponent', () => {
  let component: ServicesLocutorComponent;
  let fixture: ComponentFixture<ServicesLocutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesLocutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesLocutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
