# Module 4 – Bootstrap Interface Comparison

Bootstrap rebuild of the Campus Service Desk request list + aside (Building Web Applications 22611).
The Module 3 CSS version stays untouched in `../` (same repository).

## Run it
No build step, no Node needed. Open `index.html` in a browser, or serve it:

    python -m http.server 8000     # then open http://localhost:8000/bootstrap-version/

## Local Bootstrap assets
- `assets/bootstrap/bootstrap.min.css` – Bootstrap 5.3.3 CSS
- `assets/bootstrap/bootstrap.bundle.min.js` – Bootstrap 5.3.3 JS (includes Popper)
- `assets/bootstrap/LICENSE-bootstrap.txt` – MIT license
No CDN is used, so the page works offline. Files were copied from the official `bootstrap@5.3.3` npm package.
My own code: `index.html`, `assets/custom.css` (focus ring only), `assets/app.js` (form feedback).

## What was built
- Layout: `container` > `row g-4` > `col-12 col-lg-8` (main) + `col-12 col-lg-4` (aside).
- Components: card (aside), alerts (status + Arabic notice), labeled form with native constraints
  (`required`, `pattern`, `minlength`, `maxlength`, `type="email"`).
- Interactive component: Modal. JavaScript dependency: `bootstrap.bundle.min.js` (Modal + Popper);
  opened with `data-bs-toggle="modal"`, closed with `data-bs-dismiss`, traps focus and closes on Esc.
- Arabic notice: `lang="ar" dir="rtl"`.

## Tested with
- Browser: Chrome (screenshots at 360px and 1280px), Firefox (form error test)
- Bootstrap 5.3.3
- Viewports: 360px and 1280px (DevTools device toolbar)

## Git evidence
- Commit id: <FILL after commit>
- Commit message: `Add Bootstrap interface comparison (Module 4)`

## Test cases
| Case | Input | Expected | Result |
|---|---|---|---|
| Valid form | ID 12345678, valid email, category, 10+ chars | green success alert | Passed - green "Request sent (demo)" alert shown |
| Edge: short ID | Student ID 123 | field invalid, red danger alert | Passed - red error alert shown (Firefox) |
| Edge: bad email | abc@ | email invalid | Passed - email field red, error alert shown |
| Edge: short description | "help" | invalid (min 10) | Passed - red alert shown, field message "Write at least 10 characters." |
| Modal | click "View request #1001 details" | dialog opens, Close button closes it | Passed - opened and closed |
| Tab order | press Tab from page load | visible focus ring on each control | Passed - see focus.png |

## Reference code
Bootstrap class names and component markup follow the official Bootstrap 5.3 docs
(Grid, Cards, Alerts, Forms validation, Modal). Everything else is my own.
