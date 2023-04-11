import Main from "./components/Main";
import { useState } from "react";

const App = () => {
    // const [imageUrl, setimageUrl] = useState('')
    // const [name, setName] = useState('')
    // const [location, setLocation] = useState('')
    // const [position, setPosition] = useState('')
    
    const [inputValues, setInputValues] = useState({
        imageUrl: '',
        name: '',
        location: "",
        position: ''
    })
    const [data, setData] = useState([])
    return (
        <> 
            {/* <input type="text" value={imageUrl} onChange={(e)=>{
                setimageUrl(e.target.value)
            }}/> */}

            <input type="text" value={inputValues.imageUrl} onChange={(e)=>{
                setInputValues((preInput)=>{
                    return {...preInput, imageUrl: e.target.value}
                })
            }}/>
            
            <input type="text" value={inputValues.name} onChange={(e)=>{
                setInputValues((preInput)=>({...preInput, name: e.target.value}))
            }}/>
            <input type="text" value={inputValues.location} onChange={(e)=>{
                setInputValues((preInput)=>({...preInput, location: e.target.value}))
            }}/>
            <input type="text" value={inputValues.position} onChange={(e)=>{
                setInputValues((preInput)=>({...preInput, position: e.target.value}))
            }}/> 

            <button onClick={()=>{
                // // one way
                // setimageUrl((preImageUrl)=>{
                //     if(preImageUrl.length > 0) {
                //         return ""
                //     } else {
                //         return preImageUrl
                //     }
                // })

                // // second way
                // setName((preName)=>{
                //     return preName.length > 0 ? "" : preName
                // })

                // // third way
                // setLocation((preLocation) => preLocation.length > 0 ? "" : preLocation)
                // setPosition((prePosition) => prePosition.length > 0 ? "" : prePosition)

                // setData((preData)=>[...preData, {imageUrl, name, location, position}])


                setInputValues(preInput => (preInput.imageUrl.length > 0 ? {...preInput, imageUrl: ''} : preInput))
                setInputValues(preInput => (preInput.name.length > 0 ? {...preInput, name: ''} : preInput))
                setInputValues(preInput => (preInput.location.length > 0 ? {...preInput, location: ''} : preInput))
                setInputValues(preInput => (preInput.position.length > 0 ? {...preInput, position: ''} : preInput))

                setData((preData)=>[...preData, {
                    imageUrl: inputValues.imageUrl, 
                    name: inputValues.name, 
                    location: inputValues.location, 
                    position: inputValues.position
                }])
                
            }}>Submit</button>

            {
                data.map((person, index)=>{
                    return <Main {...person} key={index}/>
                })
            }
        </>
    );
}

export default App;