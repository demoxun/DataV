import { App } from 'vue';
/**
 * IMPORT COMPONENTS
 */
import fullScreenContainer from './components/fullScreenContainer/index'
import loading from './components/loading/index'

// border box
import borderBox1 from './components/borderBox1/index'
import borderBox2 from './components/borderBox2/index'
import borderBox3 from './components/borderBox3/index'
import borderBox4 from './components/borderBox4/index'
import borderBox5 from './components/borderBox5/index'
import borderBox6 from './components/borderBox6/index'
import borderBox7 from './components/borderBox7/index'
import borderBox8 from './components/borderBox8/index'
import borderBox9 from './components/borderBox9/index'
import borderBox10 from './components/borderBox10/index'
import borderBox11 from './components/borderBox11/index'
import borderBox12 from './components/borderBox12/index'
import borderBox13 from './components/borderBox13/index'

// decoration
import decoration1 from './components/decoration1/index'
import decoration2 from './components/decoration2/index'
import decoration3 from './components/decoration3/index'
import decoration4 from './components/decoration4/index'
import decoration5 from './components/decoration5/index'
import decoration6 from './components/decoration6/index'
import decoration7 from './components/decoration7/index'
import decoration8 from './components/decoration8/index'
import decoration9 from './components/decoration9/index'
import decoration10 from './components/decoration10/index'
import decoration11 from './components/decoration11/index'
import decoration12 from './components/decoration12/index'

// charts
import charts from './components/charts/index'

import activeRingChart from './components/activeRingChart/index'
import capsuleChart from './components/capsuleChart/index'
import waterLevelPond from './components/waterLevelPond/index'
import percentPond from './components/percentPond/index'
import flylineChart from './components/flylineChart/index'
import flylineChartEnhanced from './components/flylineChartEnhanced/index'
import conicalColumnChart from './components/conicalColumnChart/index'
import digitalFlop from './components/digitalFlop/index'
import scrollBoard from './components/scrollBoard/index'
import scrollRankingBoard from './components/scrollRankingBoard/index'

// Main plugin object
const DataV = {
  install: (app: App) => { // Add App type
    // Register each component plugin
    app.use(fullScreenContainer)
    app.use(loading)

    // border box
    app.use(borderBox1)
    app.use(borderBox2)
    app.use(borderBox3)
    app.use(borderBox4)
    app.use(borderBox5)
    app.use(borderBox6)
    app.use(borderBox7)
    app.use(borderBox8)
    app.use(borderBox9)
    app.use(borderBox10)
    app.use(borderBox11)
    app.use(borderBox12)
    app.use(borderBox13)

    // decoration
    app.use(decoration1)
    app.use(decoration2)
    app.use(decoration3)
    app.use(decoration4)
    app.use(decoration5)
    app.use(decoration6)
    app.use(decoration7)
    app.use(decoration8)
    app.use(decoration9)
    app.use(decoration10)
    app.use(decoration11)
    app.use(decoration12)

    // charts
    app.use(charts)

    app.use(activeRingChart)
    app.use(capsuleChart)
    app.use(waterLevelPond)
    app.use(percentPond)
    app.use(flylineChart)
    app.use(flylineChartEnhanced)
    app.use(conicalColumnChart)
    app.use(digitalFlop)
    app.use(scrollBoard)
    app.use(scrollRankingBoard)
  }
};

export default DataV;
