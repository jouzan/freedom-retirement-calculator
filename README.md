# Freedom retirement calculator

A responsive retirement planner with investment projections and 3D-style charts.

**Website:** https://jouzan.github.io/freedom-retirement-calculator/

## Features

- Current age, annual take-home income, current annual living expenses, annual investments, and passive income
- Available annual investment budget based on income minus current living expenses
- Separate balances and annual returns for stocks, money market funds, and a 401(k)
- Home and vehicle values, shown separately from retirement funding
- Retirement age, annual expenses, inflation, and Social Security estimates
- Earliest funded retirement age, modeled monthly budget, and savings depletion age
- Investment and income charts with future-dollar and today's-dollar views
- Interactive annual savings-withdrawal and Social Security chart, with exact amounts, inflation views, and unfunded-withdrawal warnings
- Year-by-year retirement projection
- Every input starts at zero on each page load; Reset all clears the plan

## Run locally

Open `Freedom Calculator.html` directly in a browser, or serve the editable files:

```sh
python3 -m http.server 4173 --directory dist
```

Then open http://localhost:4173.

## Deploy

GitHub Pages is deployed automatically by `.github/workflows/pages.yml` on pushes to `main`. The workflow checks JavaScript syntax and publishes `dist/`.

## Projection assumptions

The model uses constant annual returns, proportional contributions and withdrawals, year-end cash flows, and inflation-adjusted income and expenses. Home and vehicle values are excluded from retirement funding. Debt, taxes, account-access restrictions, fees, and market volatility are not modeled. Enter your own financial inputs. Projections are illustrative estimates, not financial advice.

Financial inputs are processed in the browser and are not submitted to a server or restored between visits.
