import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sibling1Component } from './sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component';
import { FormsModule } from '@angular/forms';

describe('Sibling1Component', () => {
  let component: Sibling1Component;
  let fixture: ComponentFixture<Sibling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sibling1Component, Sibling2Component],
      imports: [FormsModule] // ✅ Move FormsModule here
    }).compileComponents();

    fixture = TestBed.createComponent(Sibling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
