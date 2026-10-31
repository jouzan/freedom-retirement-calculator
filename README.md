# Freedom retirement calculator

A responsive retirement planner with investment projections and 3D-style charts.

**Website:** https://jouzan.github.io/freedom-retirement-calculator/

## Features

- Current age, annual take-home income, current annual living expenses, and annual investments
- Available annual investment budget based on income minus current living expenses
- Separate balances and annual returns for stocks, money market funds, and a 401(k)
- Home and vehicle values, shown separately from retirement funding
- Retirement age, annual expenses, Social Security estimates, and passive income during retirement
- Earliest funded retirement age, modeled monthly budget, and savings depletion age
- Automatic 50% expense reduction starting three years before the original funding shortfall and continuing thereafter
- Investment and income charts using the dollar amounts you enter
- Collapsible annual savings-withdrawal and Social Security chart, with exact amounts and unfunded-withdrawal warnings
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

The model uses constant annual returns, proportional contributions and withdrawals, and year-end cash flows. The original full-expense projection determines a fixed reduction age: three years before its first funding shortfall, clamped to retirement age. Expenses become 50% of the original input from that age onward, and the projection is recomputed once. No reduction is triggered when the original plan is funded through age 100. Earliest-retirement and modeled-budget estimates retain the selected plan’s fixed reduction age for consistency. Passive income starts at retirement and remains fixed at its entered annual amount. Monthly Social Security remains fixed from the selected starting age onward. Enter larger expenses yourself if you want an extra cushion. Home and vehicle values are excluded from retirement funding. Debt, taxes, account-access restrictions, fees, and market volatility are not modeled. Enter your own financial inputs. Projections are illustrative estimates, not financial advice.

Financial inputs are processed in the browser and are not submitted to a server or restored between visits.
