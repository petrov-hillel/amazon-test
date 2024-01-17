import React from 'react'
import { useLocation } from 'react-router-dom'

import Table from "../Table/Table";
import {createColumns} from "../../utils/createColumns";

export default function ProfilesTable() {
    const { state: { entity }} = useLocation()
    const columns = createColumns(entity)

    const navigateParams = {
        url: 'campaigns',
        link: 'profileId',
    }

    return(
        <Table data={entity} navigateParams={navigateParams} columns={columns}/>
    )
}
