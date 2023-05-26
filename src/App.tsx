import { TreeMapComponent } from "./charts/TreeMap/TreeMapChart";
import { AreaChartComponent } from "./charts/AreaChart/AreaChart";
import { BarChartComponent } from "./charts/BarChart/BarChart";
import { ComposedChartComponent } from "./charts/ComposedChart/ComposedChart";
import { FunnelChartComponent } from "./charts/FunnelChart/FunnelChart";
import { LineChartComponent } from "./charts/LineChart/LineChart";
import { PieChartComponent } from "./charts/PieChart/PieChart";
import { RadialBarChartComponent } from "./charts/RadialBarChart/RadialBarChart";
import { ScatterChartComponent } from "./charts/ScatterChart/ScatterChart";
import { SankeyChartComponent } from "./charts/SankeyChart/SankeyChart";

// Data - array with objects, we can define name, rest keys are optional and easy to configure, then we match them in Bar with dataKey atrribute
export const data = [
    { name: "RandomInfo A", randomValue: 400, uv: 670, pv: 230, fill: "red" },
    {
        name: "RandomInfo B",
        randomValue: 550,
        uv: 200,
        pv: 223,
        fill: "rgba(255, 100, 200, .6)",
    },
    { name: "RandomInfo C", randomValue: 10, uv: 310, pv: 113 },
    { name: "RandomInfo D", randomValue: 250, uv: 900, pv: 523 },
    { name: "RandomInfo E", randomValue: 750, uv: 500, pv: 823 },
    { name: "RandomInfo F", randomValue: 321, uv: 440, pv: 220 },
    { name: "RandomInfo G", randomValue: 110, uv: 500, pv: 100 },
];

const App = () => {
    return (
        <div className="wrapper flex flex-col gap-20 mt-20">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center text-4xl mb-5">Area Chart</h2>
                <AreaChartComponent />
            </div>
            <div>
                <h2 className="text-center text-4xl mb-5"> Bar Chart</h2>
                <BarChartComponent />
            </div>
            <div>
                <h2 className="text-center text-4xl mb-5">Line Bar Chart</h2>
                <LineChartComponent />
            </div>
            <div>
                <h2 className="text-center text-4xl mb-5">Composed Chart</h2>
                <ComposedChartComponent />
            </div>
            <div>
                <h2 className="text-center text-4xl mb-5">Pie Chart</h2>
                <PieChartComponent />
            </div>
            <div>
                <h2 className="text-center text-4xl mb-5">RadialBar Chart</h2>
                <RadialBarChartComponent />
            </div>
            <div>
                <h2 className="text-center text-4xl mb-5">Scatter Chart</h2>
                <ScatterChartComponent />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center text-4xl mb-5">Funnel Chart</h2>
                <FunnelChartComponent />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center text-4xl mb-5">TreeMap Chart</h2>
                <TreeMapComponent />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-center text-4xl mb-5">Sankey Chart</h2>
                <SankeyChartComponent />
            </div>
        </div>
    );
};

export default App;
