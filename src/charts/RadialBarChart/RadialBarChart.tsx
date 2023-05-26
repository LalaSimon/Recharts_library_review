import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import { checkWidth } from "../../functions/widthCheck";

export const RadialBarChartComponent = () => {
    const data01 = [
        {
            name: "Group A",
            value: 100,
            fill: "red",
            stroke: "black",
        },
        {
            name: "Group B",
            value: 300,
            stroke: "black",
            fill: "darkgreen",
        },
        {
            name: "Group C",
            value: 300,
            fill: "darkyellow",
        },
        {
            name: "Group D",
            value: 200,
            fill: "darkblue",
        },
        {
            name: "Group E",
            value: 278,
            fill: "orange",
        },
        {
            name: "Group F",
            value: 189,
            fill: "brown",
        },
    ];
    return (
        <RadialBarChart
            width={checkWidth()}
            height={350}
            innerRadius="10%"
            outerRadius="90%"
            data={data01}
            startAngle={180}
            endAngle={0}
        >
            <RadialBar
                label={{ fill: "white", position: "insideStart" }}
                legendType="wye"
                background
                dataKey="value"
            />
            <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                align="right"
            />
            <Tooltip />
        </RadialBarChart>
    );
};

/* NOT RECOMMENDED CHART IN MY OPINION

RadialBarChart - environment for Radiabar Charts
    - outerRadius: Size of the circle
    - innerRadius: Size of the "empty" circle inside to make circle thin

RadialBar - Component : {
    - label is bugged
    - background adds gray background by default
}
!!!
Objects need to have fill value with color to change it, stroke in objects change border color
!!!


https://recharts.org/en-US/api/RadialBarChart
*/
