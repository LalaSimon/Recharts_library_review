import { FunnelChart, Tooltip, Funnel, LabelList } from "recharts";

const data = [
    {
        name: "Group A",
        value: 10,
        fill: "red",
        stroke: "black",
    },
    {
        name: "Group B",
        value: 20,
        stroke: "black",
        fill: "darkgreen",
    },
    {
        name: "Group C",
        value: 15,
        fill: "black",
    },
    {
        name: "Group D",
        value: 12,
        fill: "darkblue",
    },
    {
        name: "Group E",
        value: 17,
        fill: "orange",
    },
    {
        name: "Group F",
        value: 22,
        fill: "brown",
    },
];

const sortData = data.sort((prev, next) => {
    return prev.value - next.value;
});
sortData.reverse();

export const FunnelChartComponent = () => {
    return (
        <FunnelChart width={450} height={500}>
            <Tooltip />
            <Funnel dataKey="value" data={sortData}>
                <LabelList
                    position="middle"
                    fill="white"
                    stroke="none"
                    dataKey="name"
                />
            </Funnel>
        </FunnelChart>
    );
};

/* Its tricky one, looking good in some scenarios

FunnelChart - environment for Funnel charts
Funnel - component
label List - label configuration for this chart
Tooltop - Can be styled with wrapperStyle, always on hover, cannot style background though. Also color of font style only title of object name value
Legend - generate without any values names, litle squares, colors heritate from Bar component


https://recharts.org/en-US/api/FunnelChart
*/
