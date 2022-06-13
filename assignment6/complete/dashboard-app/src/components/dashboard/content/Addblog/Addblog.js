import React,{ useState } from 'react';
import "../../../../theme_styles/dasboard/AddEditform.css"

export default function Addblog(props) {
    const [errorid, seterrorid] = useState(<div></div>)
    const [errortitle, seterrortitle] = useState(<div></div>)
    const [errorbody, seterrorbody] = useState(<div></div>)

    function handleUserSubmit(e){
        e.preventDefault();
        let flag=0;
        if((e.target.id.value.length <1)){
            flag=1;
            seterrorid(<div className="errormsg">User-Id cannot be empty</div>)
        }
        if((e.target.title.value.length <1)){
            flag=1;
            seterrortitle(<div className="errormsg">Title must not be empty</div>)
        }
        if((e.target.body.value.length <1)){
            flag=1;
            seterrorbody(<div className="errormsg">Body must not be empty</div>)
        }
        if(flag==0){
            alert("added a new blog");
            props.fun({
                "userId":e.target.id.value,
                "title":e.target.title.value,
                "body":e.target.body.value,
            })}
        if(flag==1){
            alert("enter valid details")
        }
       
    }
    function handlefocus1(){
        seterrorid(<div></div>)
    }
    function handlefocus2(){
        seterrortitle(<div></div>)
    }
    function handlefocus3(){
        seterrorbody(<div></div>)
    }
    function validate1(e){
        if((e.target.value.length <1)){
            seterrorid(<div className="errormsg">User-Id cannot be empty</div>)
        }
    }function validate2(e){
        if((e.target.value.length <1)){
            seterrortitle(<div className="errormsg">Title must not be empty</div>)
        }
    }function validate3(e){
        if((e.target.value.length <1)){
            seterrorbody(<div className="errormsg">Body must not be empty</div>)
        }
    }
    return (
        <div>
            <form onSubmit={handleUserSubmit} className="addform">
                <input type="text" placeholder="User-Id" name="id" onFocus={handlefocus1} onBlur={validate1}/>
                {errorid}
                <input type="text" placeholder="title" name="title" onFocus={handlefocus2} onBlur={validate2}/>
                {errortitle}
                <input type="text" placeholder="Content" name="body" onFocus={handlefocus3} onBlur={validate3}/>
               {errorbody}
                <button type="submit" className="submitaddform">Submit</button>
                <button onClick={()=>{
                    props.closeform()
                }} className="closeform">X</button>
            </form>
        </div>
    )
}
