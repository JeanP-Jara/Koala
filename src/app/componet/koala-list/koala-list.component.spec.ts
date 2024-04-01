import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoalaListComponent } from './koala-list.component';

describe('KoalaListComponent', () => {
  let component: KoalaListComponent;
  let fixture: ComponentFixture<KoalaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoalaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoalaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
