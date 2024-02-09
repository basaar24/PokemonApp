import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [],
      imports: [FormsModule],
      schemas: []
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', fakeAsync(() => {
    const de = fixture.debugElement.query(By.css("#value"));
    const el = de.nativeElement;

    el.value = "arturo@g";

    var event = new Event('input', {
      'bubbles': true,
      'cancelable': true
    });
    el.dispatchEvent(event);

    tick();

    fixture.detectChanges();

    expect(component.value).toEqual("arturo@g");
    expect(component.placeholderValue).toEqual("arturo@gmail.com");
  }));
});