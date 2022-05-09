import React, { useEffect } from 'react';
import { useState } from 'react'
import CatchItem from "../Catches/catchItem";
import { Ellipsis } from 'react-spinners-css';
import getCatchData from '../../Services/getCatchData';
import { MDBDatatable } from 'mdb-react-ui-kit';
const axios = require('axios');


const Catches = (setAppNav, setCatchId) => {
    const [responseData, setResponseData] = useState([]);
    const [columns] = useState([
        { label: 'Name', field: 'name', sort: true },
        { label: 'Size', field: 'size', sort: true },
        { label: 'Amount', field: 'amount', sort: true },
        { label: 'Date', field: 'date', sort: true },
        { label: 'Location', field: 'stationId', sort: true }
    ]);
    const [isLoading, setIsLoading] = useState(true);

    const [advancedData, setAdvancedData] = useState({
        columns: [],
        rows: [],
    });


    useEffect(() => {
        axios.get('https://localhost:7212/api/catch/all/1').then((response) => {
            console.log(response.data);
            let rows = response.data;
            setAdvancedData({ columns, rows });
        });
        setIsLoading(false);
    }, []);

    const rowColor = ['#00C4D9;', '#79D7E3'];
    return (
        <div>
            {isLoading == true && <Ellipsis />}

            {isLoading == false &&
                <div className="content">
                    <div>
                        <h2 className="catches-title">My Catches</h2>
                        <div className="table-div">
                            <div className="container-fluid heading-row mt-3">
                                {isLoading == false && <MDBDatatable advancedData data={advancedData} />}

                            </div>
                            {/* {responseData.map(
                                (catches, index) =>
                                    <div>
                                        <CatchItem rowColor={rowColor[index % rowColor.length]} key={catches.catchInfo.catchId} catchId={catches.catchInfo.catchId} updateAppNav={setAppNav} updateCatchId={setCatchId} Name={catches.catchInfo.name} Size={catches.catchInfo.size} Amount={catches.catchInfo.amount} Date={catches.catchInfo.date} Location={catches.catchInfo.stationId} />
                                    </div>
                            )} */}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
export default Catches;
