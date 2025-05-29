import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationComponent } from './communication.component';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

describe('CommunicationComponent', () => {
  let component: CommunicationComponent;
  let fixture: ComponentFixture<CommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationComponent , ChildComponent],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
