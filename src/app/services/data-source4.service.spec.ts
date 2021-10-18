import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataSource4Service } from './data-source4.service';

describe('DataSource4Service', () => {
  let service: DataSource4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataSource4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
