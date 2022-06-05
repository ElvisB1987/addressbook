import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ columns, items = [] }) => {
    return (
        <div className={"sm:px-6 mt-6 "}>
            <table className=" border-collapse w-full min-w-full divide-y divide-gray-200">
                <TableHeader columns={columns} />
                <TableBody columns={columns} items={items} />
            </table>
        </div>
    );
};

Table.propTypes = {
    columns: PropTypes.array,
    items: PropTypes.array,
};
export default Table;
