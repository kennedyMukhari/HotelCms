import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhotelPage } from './ahotel.page';

describe('AhotelPage', () => {
  let component: AhotelPage;
  let fixture: ComponentFixture<AhotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhotelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
