import { Treemap } from "recharts";
import { data } from "../../App";
import { checkWidth } from "../../functions/widthCheck";

export const TreeMapComponent = () => {
    return (
        <Treemap
            width={checkWidth()}
            height={350}
            data={data}
            dataKey="randomValue"
            aspectRatio={4 / 3}
            stroke="#fff"
            fill="#8884d8"
        />
    );
};

/* Really cool!
Treemap - whole component, really cool, colors can be by default if properties in data doesnt have fill value.

https://recharts.org/en-US/api/Treemap
*/
