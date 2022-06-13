import React,{ useState } from 'react';
import "../../../../theme_styles/dasboard/AddEditform.css"

export default function Adduser(props) {
    const regemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const [errorname, seterrorname] = useState(<div></div>);
    const [erroremail, seterroremail] = useState(<div></div>);
    const [errorhno, seterrorhno] = useState(<div></div>);
    const [errorstreet, seterrorstreet] = useState(<div></div>);
    const [errorcity, seterrorcity] = useState(<div></div>);

    function handleUserSubmit(e) {
        e.preventDefault();
        let flag=0;
        if((e.target.name.value.length <4)){
            flag=1;
            seterrorname(<div className="errormsg">Name should be min. 4 characters</div>)
        }
        if (!regemail.test(e.target.email.value)){
            flag=1;
            seterroremail(<div className="errormsg">E-mail should be proper</div>)
        }
        if((e.target.suite.value.length <1)){
            flag=1;
            seterrorhno(<div className="errormsg">H. No. must not be empty</div>)
        }
        if((e.target.street.value.length <1)){
            flag=1;
            seterrorstreet(<div className="errormsg">Street must not be empty</div>)
        }
        if((e.target.city.value.length <1)){
            flag=1;
            seterrorcity(<div className="errormsg">City must not be empty</div>)
        }
        if(flag==0){
            alert("addec a new user");
            props.fun({
            "name": e.target.name.value,
            "email": e.target.email.value,
            "address": {
                "suite": e.target.suite.value,
                "street": e.target.street.value,
                "city": e.target.city.value
            },
            "id": props.id
        })}
        if(flag==1){
            alert("enter valid details")
        }
    }
    function handlefocus1(){
        seterrorname(<div></div>)
    }
    function handlefocus2(){
        seterroremail(<div></div>)
    }
    function handlefocus3(){
        seterrorhno(<div></div>)
    }
    function handlefocus4(){
        seterrorstreet(<div></div>)
    }
    function handlefocus5(){
        seterrorcity(<div></div>)
    }
    function validate1(e){
        if((e.target.value.length <4)){
            seterrorname(<div className="errormsg">Name should be min. 4 characters</div>)
        }
    }
    function validate2(e){
        if (!regemail.test(e.target.value)){
            seterroremail(<div className="errormsg">E-mail should be proper</div>)
        }
    }
    function validate3(e){
        if((e.target.value.length <1)){
            seterrorhno(<div className="errormsg">H. No. must not be empty</div>)
        }
    }
    function validate4(e){
        if((e.target.value.length <1)){
            seterrorstreet(<div className="errormsg">Street must not be empty</div>)
        }
    }
    function validate5(e){
        if((e.target.value.length <1)){
            seterrorcity(<div className="errormsg">City must not be empty</div>)
        }
    }

    return (
        <div>
            <form onSubmit={handleUserSubmit} className="addform">
                <input type="text" placeholder="name" name="name" onFocus={handlefocus1} onBlur={validate1}/>
                {errorname}
                <input type="text" placeholder="E-Mail" name="email"  onFocus={handlefocus2} onBlur={validate2}/>
                {erroremail}
                <input type="text" placeholder="H. No." name="suite" onFocus={handlefocus3} onBlur={validate3}/>
                {errorhno}
                <input type="text" placeholder="Street" name="street" onFocus={handlefocus4} onBlur={validate4} />
                {errorstreet}
                <input type="text" placeholder="City" name="city" onFocus={handlefocus5} onBlur={validate5} />
                {errorcity}
                <button type="submit" className="submitaddform">Submit</button>
                <button onClick={() => {
                    props.closeform()
                }} className="closeform">X</button>
            </form>
        </div>
    )
}
