import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { checkWidth } from "../../functions/widthCheck";

export const PieChartComponent = () => {
    const data01 = [
        {
            name: "Group A",
            value: 400,
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
            fill: "black",
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
        <PieChart width={checkWidth()} height={350}>
            <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                innerRadius={60}
                label
            />

            <Legend
                iconSize={10}
                layout="vertical"
                align="right"
                verticalAlign="middle"
            ></Legend>
            <Tooltip></Tooltip>
        </PieChart>
    );
};

/*
PieChart - environment for pie charts
Pie - Component : {
    - outerRadius: Size of the circle
    - innerRadius: Size of the "empty" circle inside to make circle thin
    - label show us numbers
}
Tooltop - Can be styled with wrapperStyle, always on hover, cannot style background though. Also color of font style only title of object name value
Legend - generate without any values names, litle squares, colors heritate from Bar component
!!!
Objects need to have fill value with color to change it, stroke in objects change border color
!!!


https://recharts.org/en-US/api/PieChart
*/
