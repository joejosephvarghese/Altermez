import { PageTitle } from "../../components/common"
import UserListTable from "../../components/admin/UsersList"

const UserPage = () =>{
    return (
        <div>
           <PageTitle title={"Users Detassssils"}/>
           <UserListTable/>
        </div>
    )
}

export default UserPage