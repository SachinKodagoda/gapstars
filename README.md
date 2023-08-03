## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- You can click on the increment, decrement and reset buttons

## To Run Jest Tests

```bash
npm run test
# or
yarn test
# or
pnpm test
```

Following tests are implemented with jest:<br/>

- Is the page and buttons are rendered <br/>
- initial amount of the should be 0
  <br/>
- When decrementing below 0, the amount should be 0
  <br/>
- When incrementing above 10, the amount should be 10
  <br/>
- When clicking on the increment button, the amount should be incremented by 1
  <br/>
- When clicking on the decrement button, the amount should be decremented by 1
  <br/>
- When clicking on the reset button, the amount should be reset to 0

Cypress is Installed but didn't have time to do E2E<br/>
