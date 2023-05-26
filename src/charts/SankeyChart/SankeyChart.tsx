import { Sankey, Tooltip } from "recharts";
import { checkWidth } from "../../functions/widthCheck";

const data0 = {
    nodes: [
        { name: "Visit" },
        { name: "Direct-Favourite" },
        { name: "Page-Click" },
        { name: "Detail-Favourite" },
        { name: "Lost" },
    ],
    links: [
        { source: 0, target: 1, value: 3728.3 },
        { source: 0, target: 2, value: 354170 },
        { source: 2, target: 3, value: 62429 },
        { source: 2, target: 4, value: 291741 },
    ],
};

export const SankeyChartComponent = () => {
    return (
        <Sankey
            width={checkWidth()}
            height={500}
            data={data0}
            node={{ stroke: "#FF0000", strokeWidth: 2 }}
            nodePadding={50}
            margin={{
                left: 200,
                right: 200,
                top: 100,
                bottom: 100,
            }}
            link={{ stroke: "black" }}
        >
            <Tooltip />
        </Sankey>
    );
};

/* Need to work on it
Sankey - Component that has only one possible child with is Tooltip, i dont know why i cant get string values from data linke on docs, even though i copypaste it from docs
https://recharts.org/en-US/api/SankeyChart

*/
