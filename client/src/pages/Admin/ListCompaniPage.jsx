import React from "react";

import ListCompaniTable from "../../components/admin/ListCompaniTable";
import PageTitle from "../../components/common";
const ListCompaniPage=()=>{
    

    return(
        <div>
             <PageTitle title="Employers Details"/>
            <ListCompaniTable/>
        </div>
    )
}

export default ListCompaniPage