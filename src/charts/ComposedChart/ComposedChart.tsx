import {
    ComposedChart,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    CartesianGrid,
    Legend,
    Area,
    Bar,
} from "recharts";
import { data } from "../../App";
import { checkWidth } from "../../functions/widthCheck";

export const ComposedChartComponent = () => {
    return (
        <ComposedChart width={checkWidth()} height={350} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
                type="monotone"
                dataKey="randomValue"
                fill="#8884d8"
                stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
    );
};

/*
DESCRIPTION

Data - array with objects, we can define name, rest keys are optional and easy to configure, then we match them in Bar with dataKey atrribute
ComposedChart - whole component with chart of ComposedChart type
XAxis - description for bottom (X) axis, stroke is color for that axis. Styling every data object
YAxis - Can be customizable like a react element
Tooltop - Can be styled with wrapperStyle, always on hover, cannot style background though. Also color of font style only title of object name value
Legend - generate without any values names, litle squares, colors heritate from Bar component
CartesianGrid - Net behing values, can be styled by color (stroke) and strokeDasharray let us set breaks between every line
Line - let us generate Lines (duh.) and can be styled with stroke as color, links with dataKey
Area - component to link data values with linearGradient. You can link it with fill = "url(#ID) which you setup in linearGradient component, you can also setup Type of area"
Whole docs of this Component
https://recharts.org/en-US/api/ComposedChart
*/
