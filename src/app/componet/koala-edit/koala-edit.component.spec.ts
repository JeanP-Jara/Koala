import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoalaEditComponent } from './koala-edit.component';

describe('KoalaEditComponent', () => {
  let component: KoalaEditComponent;
  let fixture: ComponentFixture<KoalaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoalaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoalaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
