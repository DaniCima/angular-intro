import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecInnovativeComponent } from './sec-innovative.component';

describe('SecInnovativeComponent', () => {
  let component: SecInnovativeComponent;
  let fixture: ComponentFixture<SecInnovativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecInnovativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecInnovativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
