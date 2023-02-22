import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import {expect, jest, test} from '@jest/globals';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('checkKey should make a call to the server to check the validity of a key', () => {
    const key = 'ewu0fef0ewuf08j3892jf98';
    const mockResponse = '{"isValid": true}';
    service.checkKey(key).subscribe((result: any) => {
      expect(result).toEqual(mockResponse);
    });
    // Expect a request to the URL
    const mockReq = httpMock.expectOne('http://localhost:8080/api/check');
    // Execute the request using the mockResponse data
    mockReq.flush(mockResponse);
  });

});