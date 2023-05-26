import {
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    CartesianGrid,
    Legend,
    LabelList,
} from "recharts";
import { data } from "../../App";
import { checkWidth } from "../../functions/widthCheck";

export const LineChartComponent = () => {
    return (
        <LineChart width={checkWidth()} height={350} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#FF00FF" />
            <Line type="monotone" dataKey="uv" stroke="#00FFFF">
                <LabelList dataKey="name" position="right"></LabelList>
            </Line>
            <Line type="monotone" dataKey="randomValue" stroke="#0000FF" />
            <CartesianGrid strokeDasharray="3 3" />
        </LineChart>
    );
};

/*
DESCRIPTION

Data - array with objects, we can define name, rest keys are optional and easy to configure, then we match them in Bar with dataKey atrribute
LineChart - whole component with chart of LineChart type
XAxis - description for bottom (X) axis, stroke is color for that axis. Styling every data object
YAxis - Can be customizable like a react element
Tooltop - Can be styled with wrapperStyle, always on hover, cannot style background though. Also color of font style only title of object name value
Legend - generate without any values names, litle squares, colors heritate from Bar component
CartesianGrid - Net behing values, can be styled by color (stroke) and strokeDasharray let us set breaks between every line
Line - let us generate Lines (duh.) and can be styled with stroke as color, links with dataKey

Whole docs of this Component
https://recharts.org/en-US/api/LineChart
*/
