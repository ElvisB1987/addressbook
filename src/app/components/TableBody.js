import React from "react";
import PropTypes from "prop-types";

const TableBody = ({ items, columns }) => {
    return (
        <tbody className={"bg-white divide-y divide-gray-200"}>
            {items.map((item) => {
                return (
                    <tr key={item.uuid}>
                        {columns.map((column) => {
                            return (
                                <td
                                    className={column.bodyClassName}
                                    key={column.label}
                                >
                                    {column.renderCell(item)}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

TableBody.propTypes = {
    columns: PropTypes.array,
    items: PropTypes.array,
};
export default TableBody;
