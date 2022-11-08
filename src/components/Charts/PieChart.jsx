import React from 'react'
import { AccumulationSeriesDirective, AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationDataLabel, Inject, PieSeries, AccumulationLegend, AccumulationTooltip} from '@syncfusion/ej2-react-charts'

import {ecomPieChartData} from '../../data/dummy'
// import { useStateContext } from '../../context/ContextProvider'

const PieChart = () => {
  // const {currentMode} = useStateContext()
  return (
    <AccumulationChartComponent
      id='pie-chart'
      center={{x:'50%', y:'50%'}}
      enableSmartLabels={{enable: true}}
      enableAnimation={{enable: true}}
      tooltip={{enable: true}}
      legendSettings={{enable: false}}
      // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]}/>
      <AccumulationSeriesCollectionDirective>
        {ecomPieChartData.map((item, index) => <AccumulationSeriesDirective key={index} {...item}/>)}
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default PieChart