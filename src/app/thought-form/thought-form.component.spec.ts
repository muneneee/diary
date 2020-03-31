import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtFormComponent } from './thought-form.component';

describe('ThoughtFormComponent', () => {
  let component: ThoughtFormComponent;
  let fixture: ComponentFixture<ThoughtFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
