import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComparsionComponent } from './image-comparsion.component';

describe('ImageComparsionComponent', () => {
  let component: ImageComparsionComponent;
  let fixture: ComponentFixture<ImageComparsionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageComparsionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageComparsionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
