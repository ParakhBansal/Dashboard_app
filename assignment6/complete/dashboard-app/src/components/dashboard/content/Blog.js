import React, { useState, useEffect } from 'react';
import axios from "axios";
import Adduser from './Addblog/Addblog';
import "../../../theme_styles/dasboard/content/User.css";
import Editblog from './Editblog/Editblog';
import Api from '../../../Service';

function Blog(props) {
    const [userdata, setuserdata] = useState([]);
    const [addflag, setaddflag] = useState(false);
    const [id, setid] = useState(11);
    const [editflag, seteditflag] = useState(false);
    const [editindex, seteditindex] = useState(0);

    function adduserfromchild(newuser) {
        if (localStorage?.getItem("addedblogs")?.length == 0) {
            localStorage.setItem("addedblogs", JSON.stringify([newuser]))
        }
        else {
            var storedArray = JSON.parse(localStorage?.getItem("addedblogs"));
            storedArray.push(newuser);
            localStorage.setItem("addedblogs", JSON.stringify(storedArray));
        }
        setuserdata([...userdata, newuser])
        setaddflag(false)
        setid(id + 1)
    }
    function editblog() {
        setuserdata(JSON.parse(localStorage?.getItem("addedblogs")))
        seteditflag(false)
    }
    function closeform() {
        seteditflag(false);
        setaddflag(false)
    }
    function adduser() {
        setaddflag(true);
    }
    useEffect(() => {
        const apiUrl = Api.blog;
        axios.get(apiUrl)
            .then(res => {
                if (localStorage?.getItem("addedblogs")?.length == 0) {
                    localStorage.setItem("addedblogs", JSON.stringify(res.data.slice(0, 6)))
                }
                setuserdata(JSON.parse(localStorage?.getItem("addedblogs")))
            })
        document.querySelector(`.active`).addEventListener("click", () => {
            setaddflag(false);
            seteditflag(false);
        })
    }, [])

    if (editflag) {
        return <Editblog fun={editblog} closeform={closeform} i={editindex} />;
    }
    if (addflag) {
        return (<Adduser id={id} closeform={closeform} fun={adduserfromchild} />)
    }
    return <div className="userParent">
        <button className="adduser" onClick={adduser}>Add Blog</button>

        <div className="usertable">
            <table>
                <tr className="tablehead">
                    <td>
                        UserId
                    </td>
                    <td>
                        Title
                    </td>
                    <td>
                        Content
                    </td>
                    <td>
                        Action
                    </td>
                </tr>
                {userdata.map((user, i) =>
                    <tr className="usertablerows">
                        <td>
                            {user.userId}
                        </td>
                        <td>
                            {user.title}
                        </td>
                        <td>
                            {user.body}
                        </td>
                        <td className="EditDelUSer">
                            <button className="useredit" onClick={() => {
                                seteditindex(i);
                                seteditflag(true);
                            }}>Edit</button>
                            <button className="useredit" onClick={() => {
                                let arr = JSON.parse(localStorage?.getItem("addedblogs"));
                                arr.splice(i, 1);
                                setuserdata(arr);
                                localStorage.setItem("addedblogs", JSON.stringify(arr))
                            }}>Delete</button>

                        </td>
                    </tr>)}
            </table>
        </div></div>;

}

export default Blog
