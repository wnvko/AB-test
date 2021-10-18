import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataSource5Service } from './data-source5.service';

describe('DataSource5Service', () => {
  let service: DataSource5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataSource5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
