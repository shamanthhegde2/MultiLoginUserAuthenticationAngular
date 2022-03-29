import { TestBed } from '@angular/core/testing';

import { AuthSuperRoleGuard } from './auth-super-role.guard';

describe('AuthSuperRoleGuard', () => {
  let guard: AuthSuperRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthSuperRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
