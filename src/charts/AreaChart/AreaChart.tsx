import {
    AreaChart,
    XAxis,
    YAxis,
    Tooltip,
    Area,
    CartesianGrid,
    Legend,
    LabelList,
} from "recharts";
import { data } from "../../App";
import { checkWidth } from "../../functions/widthCheck";

export const AreaChartComponent = () => {
    return (
        <AreaChart width={checkWidth()} height={350} data={data}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                <linearGradient
                    id="colorRandomvalue"
                    x1="1"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop offset="5%" stopColor="#FFca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FFca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
                contentStyle={{ background: "#a3f551" }}
                labelStyle={{ color: "yellow" }}
            />
            <Area
                type="monotone"
                dataKey="randomValue"
                stroke="#FF00F0"
                fillOpacity={1}
                fill="url(#colorRandomvalue)"
            >
                <LabelList
                    dataKey="name"
                    position="insideBottomLeft"
                ></LabelList>
            </Area>
            <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
            />
            <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
            />
            <Legend></Legend>
        </AreaChart>
    );
};

/*
DESCRIPTION

Data - array with objects, we can define name, rest keys are optional and easy to configure, then we match them in Bar with dataKey atrribute
AreaChart - whole component with chart of Area type
XAxis - description for bottom (X) axis, stroke is color for that axis. Styling every data object
YAxis - Can be customizable like a react element
Tooltip - Can be styled with wrapperStyle, always on hover, cannot style background though. Also color of font style only title of object name value
Legend - generate without any values names, litle squares (we can change that individually for every data key), colors heritate from Bar component
CartesianGrid - Net behing values, can be styled by color (stroke) and strokeDasharray let us set breaks between every line
defs - component to set up gradients color and add SVG elements if we want
tolinearGradient - setup for gradient colors and setup
Area - component to link data values with linearGradient. You can link it with fill = "url(#ID) which you setup in linearGradient component, you can also setup Type of area"



Whole docs of this Component
https://recharts.org/en-US/api/AreaChart
*/
