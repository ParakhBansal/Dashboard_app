import React, { useState } from 'react';
import "../../../../theme_styles/dasboard/AddEditform.css"

function Edituser(props) {
    const [storedArray, setstoredArray] = useState(JSON.parse(localStorage?.getItem("addedusers")));
    const [name, setname] = useState(storedArray[props.i].name);
    const [email, setemail] = useState(storedArray[props.i].email);
    const [suite, setsuite] = useState(storedArray[props.i].address.suite);
    const [street, setstreet] = useState(storedArray[props.i].address.street);
    const [city, setcity] = useState(storedArray[props.i].address.city)
    const regemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const [errorname, seterrorname] = useState(<div></div>);
    const [erroremail, seterroremail] = useState(<div></div>);
    const [errorhno, seterrorhno] = useState(<div></div>);
    const [errorstreet, seterrorstreet] = useState(<div></div>);
    const [errorcity, seterrorcity] = useState(<div></div>);


    function handleUserSubmit(e) {
        e.preventDefault();
        let flag = 0;
        if ((e.target.name.value.length < 4)) {
            flag = 1;
            seterrorname(<div className="errormsg">Name should be min. 4 characters</div>)
        }
        if (!regemail.test(e.target.email.value)) {
            flag = 1;
            seterroremail(<div className="errormsg">E-mail should be proper</div>)
        }
        if ((e.target.suite.value.length < 1)) {
            flag = 1;
            seterrorhno(<div className="errormsg">H. No. must not be empty</div>)
        }
        if ((e.target.street.value.length < 1)) {
            flag = 1;
            seterrorstreet(<div className="errormsg">Street must not be empty</div>)
        }
        if ((e.target.city.value.length < 1)) {
            flag = 1;
            seterrorcity(<div className="errormsg">City must not be empty</div>)
        }
        if (flag == 0) {
            alert("edited a new user");
            localStorage.setItem("addedusers", JSON.stringify(storedArray));
            props.fun();
        }
        if (flag == 1) {
            alert("enter valid details")
        }
    }
    function handlefocus1() {
        seterrorname(<div></div>)
    }
    function handlefocus2() {
        seterroremail(<div></div>)
    }
    function handlefocus3() {
        seterrorhno(<div></div>)
    }
    function handlefocus4() {
        seterrorstreet(<div></div>)
    }
    function handlefocus5() {
        seterrorcity(<div></div>)
    }
    function validate1(e) {
        if ((e.target.value.length < 4)) {
            seterrorname(<div className="errormsg">Name should be min. 4 characters</div>)
        }
    }
    function validate2(e) {
        if (!regemail.test(e.target.value)) {
            seterroremail(<div className="errormsg">E-mail should be proper</div>)
        }
    }
    function validate3(e) {
        if ((e.target.value.length < 1)) {
            seterrorhno(<div className="errormsg">H. No. must not be empty</div>)
        }
    }
    function validate4(e) {
        if ((e.target.value.length < 1)) {
            seterrorstreet(<div className="errormsg">Street must not be empty</div>)
        }
    }
    function validate5(e) {
        if ((e.target.value.length < 1)) {
            seterrorcity(<div className="errormsg">City must not be empty</div>)
        }
    }
    return (
        <div>
            <form onSubmit={handleUserSubmit} className="addform">
                <input value={storedArray[props.i].name} type="text" placeholder="name" name="name" onChange={(e) => {
                    setname(e.target.value);
                    storedArray[props.i].name = e.target.value
                }} onFocus={handlefocus1} onBlur={validate1} />
                {errorname}
                <input value={storedArray[props.i].email} type="text" placeholder="E-Mail" name="email" onChange={(e) => {
                    setemail(e.target.value);
                    storedArray[props.i].email = e.target.value
                }} onFocus={handlefocus2} onBlur={validate2} />
                {erroremail}
                <input value={storedArray[props.i].address.suite} type="text" placeholder="H. No." name="suite" onChange={(e) => {
                    setsuite(e.target.value);
                    storedArray[props.i].address.suite = e.target.value
                }} onFocus={handlefocus3} onBlur={validate3} />
                {errorhno}
                <input value={storedArray[props.i].address.street} type="text" placeholder="Street" name="street" onChange={(e) => {
                    setstreet(e.target.value)
                    storedArray[props.i].address.street = e.target.value
                }} onFocus={handlefocus4} onBlur={validate4} />
                {errorstreet}
                <input value={storedArray[props.i].address.city} type="text" placeholder="City" name="city" onChange={(e) => {
                    setcity(e.target.value)
                    storedArray[props.i].address.city = e.target.value
                }} onFocus={handlefocus5} onBlur={validate5} />
                {errorcity}
                <button type="submit" className="submitaddform">Submit</button>
                <button onClick={() => {
                    props.closeform()
                }} className="closeform">X</button>
            </form>
        </div>
    )
}

export default Edituser
