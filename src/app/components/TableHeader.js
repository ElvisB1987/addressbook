import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const TableHeader = ({ columns }) => {
    const { t } = useTranslation();

    return (
        <thead className={"bg-gray-100"}>
            <tr>
                {columns.map((column) => {
                    return (
                        <th
                            key={column.label}
                            className={column.headerClassName}
                        >
                            {t(column.label)}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    columns: PropTypes.array,
};

export default TableHeader;
