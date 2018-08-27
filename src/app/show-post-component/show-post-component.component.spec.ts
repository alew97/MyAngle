import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPostComponentComponent } from './show-post-component.component';

describe('ShowPostComponentComponent', () => {
  let component: ShowPostComponentComponent;
  let fixture: ComponentFixture<ShowPostComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPostComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
