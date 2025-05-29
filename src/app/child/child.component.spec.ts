import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
