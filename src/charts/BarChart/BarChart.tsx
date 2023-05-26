import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    Label,
    LabelList,
} from "recharts";
import { data } from "../../App";
import { checkWidth } from "../../functions/widthCheck";

export const BarChartComponent = () => {
    return (
        <BarChart width={checkWidth()} height={350} data={data}>
            <XAxis dataKey="name" stroke="#FFA900">
                <Label value="some data" offset={10} position={"bottom"} />
            </XAxis>
            <YAxis
                label={{
                    value: "another data",
                    angle: -90,
                    position: "insideLeft",
                }}
                type="number"
                domain={[0, 1100]}
            />
            <Tooltip
                contentStyle={{
                    width: 165,
                    backgroundColor: "black",
                    color: "yellow",
                }}
            />
            <Legend wrapperStyle={{ bottom: -20 }}></Legend>
            <CartesianGrid stroke="lightgray" strokeDasharray="2" />
            <Bar
                dataKey="uv"
                fill="rgba(136, 132, 216, 1)"
                barSize={50}
                legendType="circle"
            >
                <LabelList dataKey="name" position="top" />
            </Bar>
        </BarChart>
    );
};

/*
DESCRIPTION

Data - array with objects, we can define name, rest keys are optional and easy to configure, then we match them in Bar with dataKey atrribute
BarChart - whole component with chart of Bar type
XAxis - description for bottom (X) axis, stroke is color for that axis. Styling every data object
YAxis - Can be customizable like a react element
Tooltop - Can be styled with contentStyle, always on hover
Legend - generate without any values names, litle squares, colors heritate from Bar component
CartesianGrid - Net behing values, can be styled by color (stroke) and strokeDasharray let us set breaks between every line
Bar - let us generate bars (duh.) and can be styled with fill as color, can get label as value, and we can change the legend type if we want

Whole docs of this Component
https://recharts.org/en-US/api/Bar
*/
