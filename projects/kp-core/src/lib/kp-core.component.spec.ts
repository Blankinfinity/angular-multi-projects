import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpCoreComponent } from './kp-core.component';

describe('KpCoreComponent', () => {
  let component: KpCoreComponent;
  let fixture: ComponentFixture<KpCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
