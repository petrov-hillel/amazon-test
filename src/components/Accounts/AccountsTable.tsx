import React from 'react'
import { useLocation } from 'react-router-dom'

import Table from "../Table/Table";
import {createColumns} from "../../utils/createColumns";

export default function AccountTable() {
    const { state: { data } } = useLocation()
    const columns = createColumns(data)

    const navigateParams = {
        url: 'profiles',
        link: 'accountId',
    }

    return(
        <Table data={data} navigateParams={navigateParams} columns={columns}/>
    )
}



