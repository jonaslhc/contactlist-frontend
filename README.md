An address book that is powered by React/Redux + Graphql.

## Table of Contents

- [Assumptions](#assumptions)
- [Frontend / Backend runbook](#frontend-backend-runbook)
- [Future Work](#future-work)

## Assumptions
1. The `editable` contacts are assumed to mean modifying existing contacts, add & delete are not implemented (can be implemented upon request)

2. Assumed to be in English, no support for localization

3. Navigating to a specific contact is done with `/users/:id`

## Runbook

```
Frontend

1. npm install
2. npm start
3. Navigate to http://localhost:3000
4. http://localhost:3000/users/:id to go to a specific user identified by id

Backend

1. npm install
2. node server
```

## Future Work
1. Mobile responsiveness
2. Data persistence
3. Graphql cache
4. Code coverage
5. Add/Delete contacts