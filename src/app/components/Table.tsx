import TableData from "./TableData";

const Table = () => {
    return (
        <table className="table">
            <tr className="table__row">
                <th className="table__head">Barcode <i className="icon icon--sort"></i></th>
                <th className="table__head">Name <i className="icon icon--sort"></i></th>
                <th className="table__head">Quantity <i className="icon icon--sort"></i></th>
                <th className="table__head"></th>
                <th className="table__head"></th>
            </tr>
            <TableData></TableData>
         </table>
    )
};

export default Table;