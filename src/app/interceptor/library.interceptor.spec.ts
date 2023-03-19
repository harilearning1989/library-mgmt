import { TestBed } from '@angular/core/testing';

import { LibraryInterceptor } from './library.interceptor';

describe('LibraryInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LibraryInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LibraryInterceptor = TestBed.inject(LibraryInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
