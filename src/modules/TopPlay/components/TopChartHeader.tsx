import React from "react";
import {Link} from "react-router-dom";

export const TopChartHeader: React.FC<{
    title: string,
    to: string
}> = React.memo(({ title, to }) => (
    <div className="flex flex-row justify-between items-center md:gap-48">
        <h2 className="font-bold text-2xl text-white">
            {title}
        </h2>

        <Link
            to={to}
            className="text-gray-300 text-base cursor-pointer"
        >
            <p>See more</p>
        </Link>
    </div>
));