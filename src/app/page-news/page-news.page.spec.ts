import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNewsPage } from './page-news.page';

describe('PageNewsPage', () => {
  let component: PageNewsPage;
  let fixture: ComponentFixture<PageNewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
