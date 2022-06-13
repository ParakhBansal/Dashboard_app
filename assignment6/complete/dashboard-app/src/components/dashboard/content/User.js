import React, { useState, useEffect } from 'react';
import axios from "axios";
import Adduser from './Adduser/Adduser';
import "../../../theme_styles/dasboard/content/User.css";
import Edituser from "./Edituser/Edituser";
import Api from '../../../Service';

function User(props) {

    const [error, seterror] = useState(null);
    const [userdata, setuserdata] = useState([]);
    const [addflag, setaddflag] = useState(false);
    const [id, setid] = useState(11);
    const [editflag, seteditflag] = useState(false);
    const [editindex, seteditindex] = useState(0);
    const [apierror, setapierror] = useState(<div></div>);

    function edituser() {
        setuserdata(JSON.parse(localStorage?.getItem("addedusers")))
        seteditflag(false)
    }
    function adduserfromchild(newuser) {
        if (localStorage?.getItem("addedusers").length == 0) {
            localStorage.setItem("addedusers", JSON.stringify([newuser]))
        }
        else {
            var storedArray = JSON.parse(localStorage?.getItem("addedusers"));
            storedArray.push(newuser);
            localStorage.setItem("addedusers", JSON.stringify(storedArray));
        }
        setuserdata([...userdata, newuser]);
        setaddflag(false);
        setid(id + 1);
    }
    function adduser() {
        setaddflag(true);
    }

    function closeform() {
        seteditflag(false);
        setaddflag(false)
    }
    useEffect(() => {
        const apiUrl = Api.user;
        axios.get(apiUrl)
            .then(res => {
                if (localStorage?.getItem("addedusers")?.length == 0) {
                    localStorage.setItem("addedusers", JSON.stringify(res.data.slice(0, 7)));
                }
                setuserdata(JSON.parse(localStorage?.getItem("addedusers")))
            })
            .catch(()=>{
                setapierror(<div className="errormsg">There was an error in api calling</div>)
    })

    document.querySelector(`.active`).addEventListener("click", () => {
        setaddflag(false);
        seteditflag(false);
    })
}, [])
if (editflag) {
    return <Edituser fun={edituser} i={editindex} closeform={closeform} />;
}
if (addflag) {
    return (<Adduser id={id} val={{
        "name": "",
        "email": "",
        "address": {
            "suite": "",
            "street": "",
            "city": ""
        },
    }} fun={adduserfromchild} closeform={closeform} />)
}
return <div className="userParent">

    <button className="adduser" onClick={adduser}>Add User</button>

    <div className="usertable">
        <table style={{ width: "100%" }}>
            <tr className="tablehead">
                <td>
                    Name
                </td>
                <td>
                    E-Mail
                </td>
                <td>
                    Complete Address
                </td>
                <td>
                    Action
                </td>
            </tr>
            {userdata.map((user, i) =>
                <tr className="usertablerows">
                    <td>
                        {user.name}
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td>
                        {user.address.suite + " , " + user.address.street + " , " + user.address.city}
                    </td>
                    <td className="EditDelUSer">
                        <button className="useredit" onClick={() => {
                            seteditflag(true);
                            seteditindex(i);
                        }} >Edit</button>
                        <button className="useredit" onClick={() => {
                            let arr = JSON.parse(localStorage?.getItem("addedusers"));
                            arr.splice(i, 1);
                            setuserdata(arr)
                            localStorage.setItem("addedusers", JSON.stringify(arr))
                        }}>Delete</button>
                    </td>
                </tr>)}
        </table>
    </div></div>;
}

export default User;