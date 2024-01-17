import React from 'react'
import { useLocation } from 'react-router-dom'

import Table from "../Table/Table";
import {createColumns} from "../../utils/createColumns";

export default function CampaignsTable() {
    const { state: { entity } } = useLocation()
    const columns = createColumns(entity)

    return(
        <Table data={entity} columns={columns} />
    )
}
