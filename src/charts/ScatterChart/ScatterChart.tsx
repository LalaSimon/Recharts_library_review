import {
    ScatterChart,
    CartesianGrid,
    XAxis,
    YAxis,
    ZAxis,
    Tooltip,
    Legend,
    Scatter,
} from "recharts";
import { checkWidth } from "../../functions/widthCheck";

const data01 = [
    {
        x: 100,
        y: 200,
        z: 200,
    },
    {
        x: 120,
        y: 100,
        z: 260,
    },
    {
        x: 170,
        y: 300,
        z: 400,
    },
    {
        x: 140,
        y: 250,
        z: 280,
    },
    {
        x: 150,
        y: 400,
        z: 500,
    },
    {
        x: 110,
        y: 280,
        z: 200,
    },
];
const data02 = [
    {
        x: 200,
        y: 260,
        z: 240,
    },
    {
        x: 240,
        y: 290,
        z: 220,
    },
    {
        x: 190,
        y: 290,
        z: 250,
    },
    {
        x: 198,
        y: 250,
        z: 210,
    },
    {
        x: 180,
        y: 280,
        z: 260,
    },
    {
        x: 210,
        y: 220,
        z: 230,
    },
];

export const ScatterChartComponent = () => {
    return (
        <ScatterChart width={checkWidth()} height={350}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" type="number" name="stature" unit="cm" />
            <YAxis dataKey="y" type="number" name="weight" unit="kg" />
            <ZAxis
                dataKey="z"
                type="number"
                range={[64, 144]}
                name="score"
                unit="km"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter name="A school" data={data01} fill="blue" />
            <Scatter name="B school" data={data02} fill="red" />
        </ScatterChart>
    );
};

/* Really cool!


ScatterChart - environment for chart
CartesianGrid - net behing the chart
ZAxis - additional value to track
Xaxis - axis for X (can be mutate by unit) tracked by dataKey attribute
YAxis - axis for y (can be mutate by unit) tracked by dataKey attribute
Tooltip - tooltip on hover, cursor adds net behind the point (really cool!)
Legend - legend for tracked values
Scatter - tracked object


https://recharts.org/en-US/api/ScatterChart
*/
