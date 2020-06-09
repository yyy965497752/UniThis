# Chart.js

We are extensively using Chart.js for data visualization. For Vue.js wrapper
we're using https://github.com/hchstera/vue-charts. There is also an alternative
(https://github.com/apertureless/vue-chartjs) but we do not recommend this
as you will need to write all components yourself.

## Usage

You need to install both `chart.js` and `hchs-vue-charts` from npm

```bash
npm install chart.js hchs-vue-charts --save
```

For detailed documentation please refer to [http://www.chartjs.org/docs/latest](http://www.chartjs.org/docs/latest)
and [https://github.com/hchstera/vue-charts](https://github.com/hchstera/vue-charts).

## Webpack

https://github.com/hchstera/vue-charts/issues/19

To use Vue-charts with Webpack, add these lines in src/main.js:

```javascript
// src/main.js
import 'chart.js'
import 'hchs-vue-charts'
Vue.use(window.VueCharts)
```

## Performance recommendations for working with Chart.js

- Disable animations
- Disable bezier curves
- Use transparent, not filled backgrounds

This can be achieved by global Chart.js configuration. We implemented this in
`src/chartjs.conf.js` file.
