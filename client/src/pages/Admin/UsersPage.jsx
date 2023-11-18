import { PageTitle } from "../../components/common"
import UserListTable from "../../components/admin/UsersList"

const UserPage = () =>{
    return (
        <div>
           <PageTitle title={"Users Details"}/>
           <UserListTable/>
        </div>
    )
}

export default UserPage