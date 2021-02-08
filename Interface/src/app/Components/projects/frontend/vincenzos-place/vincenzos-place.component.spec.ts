import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VincenzosPlaceComponent } from './vincenzos-place.component';

describe('VincenzosPlaceComponent', () => {
  let component: VincenzosPlaceComponent;
  let fixture: ComponentFixture<VincenzosPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VincenzosPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VincenzosPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
