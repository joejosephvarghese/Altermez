import { PageTitle } from "../../components/common"
import UserListTable from "../../components/admin/UsersList"
import UserTableComponet from "../../components/user/UserTableComponet"
const UserTable = () =>{
    return (
        <div>
           <PageTitle title={"Users Details"}/>
           <UserTableComponet/>
        </div>
    )
}

export default UserTable