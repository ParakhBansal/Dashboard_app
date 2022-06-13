import React, { useState } from 'react';
import "../../../../theme_styles/dasboard/AddEditform.css"

function Editblog(props) {
    const [storedArray, setstoredArray] = useState(JSON.parse(localStorage.getItem("addedblogs")));
    const [userid, setuserid] = useState(storedArray[props.i].userId);
    const [title, settitle] = useState(storedArray[props.i].title);
    const [body, setbody] = useState(storedArray[props.i].body);
    const [errorid, seterrorid] = useState(<div></div>)
    const [errortitle, seterrortitle] = useState(<div></div>)
    const [errorbody, seterrorbody] = useState(<div></div>)


    function handleUserSubmit(e) {
        e.preventDefault();
        let flag = 0;
        if ((e.target.id.value.length < 1)) {
            flag = 1;
            seterrorid(<div className="errormsg">User-Id cannot be empty</div>)
        }
        if ((e.target.title.value.length < 1)) {
            flag = 1;
            seterrortitle(<div className="errormsg">Title must not be empty</div>)
        }
        if ((e.target.content.value.length < 1)) {
            flag = 1;
            seterrorbody(<div className="errormsg">Body must not be empty</div>)
        }
        if (flag == 0) {
            alert("edited a blog");
            localStorage.setItem("addedblogs", JSON.stringify(storedArray));
            props.fun();
        }
        if (flag == 1) {
            alert("enter valid details")
        }

    }
    function handlefocus1() {
        seterrorid(<div></div>)
    }
    function handlefocus2() {
        seterrortitle(<div></div>)
    }
    function handlefocus3() {
        seterrorbody(<div></div>)
    }
    function validate1(e) {
        if ((e.target.value.length < 1)) {
            seterrorid(<div className="errormsg">User-Id cannot be empty</div>)
        }
    } function validate2(e) {
        if ((e.target.value.length < 1)) {
            seterrortitle(<div className="errormsg">Title must not be empty</div>)
        }
    } function validate3(e) {
        if ((e.target.value.length < 1)) {
            seterrorbody(<div className="errormsg">Body must not be empty</div>)
        }
    }
    return (
        <div>
            <form onSubmit={handleUserSubmit} className="addform">
                <input value={storedArray[props.i].userId} type="text" placeholder="User-Id" name="id" onChange={(e) => {
                    setuserid(e.target.value)
                    storedArray[props.i].userId = e.target.value
                }} onFocus={handlefocus1} onBlur={validate1} />
                {errorid}
                <input value={storedArray[props.i].title} type="text" placeholder="Title" name="title" onChange={(e) => {
                    settitle(e.target.value)
                    storedArray[props.i].title = e.target.value
                }} onFocus={handlefocus2} onBlur={validate2} />
                {errortitle}
                <input value={storedArray[props.i].body} type="text" placeholder="Content" name="content" onChange={(e) => {
                    setbody(e.target.value);
                    storedArray[props.i].body = e.target.value
                }} onFocus={handlefocus3} onBlur={validate3} />
                {errorbody}
                <button type="submit" className="submitaddform">Submit</button>
                <button onClick={() => {
                    props.closeform()
                }} className="closeform">X</button>
            </form>
        </div>
    )
}

export default Editblog
