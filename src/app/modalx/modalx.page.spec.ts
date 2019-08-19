import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalxPage } from './modalx.page';

describe('ModalxPage', () => {
  let component: ModalxPage;
  let fixture: ComponentFixture<ModalxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
