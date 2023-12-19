import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChartReactApp } from '@dx-private/dxchart5-react/dist/chart/chart-react-app';

function App() {

  return (
    <>
      <div style={{ height: "98vh", width: "100%" }}>
        <ChartReactApp dependencies={{
          chartReactConfig: {
            drawings: {
              sidebar: {
                enabled: false
              }
            },
            toolbar: {
              showButtonsTooltip: true,
            },
          },
        }} />
      </div>
    </>
  )
}

export default App
