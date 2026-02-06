# E2E Testing Backlog

## Staff Selection Flow
- [ ] **Verify Staff Selection for Multiple Staff**: Currently, the test environment sets up only one staff member ("Staff 1"). As per specifications, the staff selection screen is skipped when only one staff is available. We need to create a test scenario with multiple staff members to verify that the staff selection screen appears and functions correctly.
  - Create "Staff 2" in `setup.ts` (or a specific test case).
  - Verify that the staff selection screen is displayed after menu selection.
  - Verify that selecting a staff member transitions to the calendar screen.
