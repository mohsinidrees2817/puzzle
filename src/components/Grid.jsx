import React, {useState,useEffect} from "react";
import Box from "./Box";
import Header from "./Header";
import FinishPopup from "./FinishPopup";

const Grid = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const [state, setState] = useState('');
  const [isFinished , setIsFinished] = useState(false)


  const getLocalStorage = () => {
    const data = localStorage.getItem("datas");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };
  useEffect(() => {
    let data = getLocalStorage()
    setData(data)
    setValue(Math.sqrt(data.length))
  }, [])


  function generateUUID() {
    return Math.random().toString(36).substring(2) +
      (new Date()).getTime().toString(36);
  }

  function randomNumberInRange(min, max,a) {
    const uniqueValueCheck = Math.floor(Math.random() * (max - min)) + min;
    
    return (a?.find((i)=>i.boxValue===uniqueValueCheck)?randomNumberInRange(min,max,a):uniqueValueCheck)
}

  const generateShuffledArray = (e)=> {
    e.preventDefault();
    let arr = []
    for(var i = 0; i < value*value; i++ ){
      const num = randomNumberInRange(1 , (value*value)+1,arr);
      let box = {
        boxValue: num,
        id: generateUUID(),
      }
      arr =[...arr , box]
      localStorage.setItem("datas", JSON.stringify([...arr]));

   }
   setData(arr)
   
  }

  const [dragedvalue , setDragedValue] = useState('')
  const [enteredvalue , setEnteredValue] = useState('')
  const onDragStart = (e , boxValue) => {
    setDragedValue(boxValue)
  }
   
  const onDragEnter = (e , boxValue) => {
    setEnteredValue(boxValue)
    return boxValue
  }
  const onDragEnd = () => {
    const val1 = dragedvalue
    const val2 = enteredvalue
    let box1 = data.map((elem) => {
      if (elem.boxValue === val1) {                
        return { ...elem, boxValue: val2};
      }
     else if (elem.boxValue === val2) {                
        return { ...elem, boxValue: val1};
      }
      return elem;
    })
    setData(box1)
    localStorage.setItem("datas", JSON.stringify([...box1]));
  }






  

  useEffect(()=>{
    const arr = data.map((elem) => {return elem.boxValue})
    console.log(arr)
    let count = 0
    for(var i = 0; i < arr.length; i++){  
      
        if(arr[i] < arr[i+1]){
          count = count+1
              if(count===arr.length-1){
              setIsFinished(true)
              }
              else{
                setIsFinished(false)
              }
          }
        else{
            return
          }
    }
},[data]
)

 let arr = ['grid-cols-2','grid-cols-3','grid-cols-4','grid-cols-5','grid-cols-6','grid-cols-7','grid-cols-8']
 
  return (
    
    <div className="realtive">
      <Header setValue={setValue} settingValue={generateShuffledArray} state={state} setState={setState} value={value} />
      {isFinished &&
        <FinishPopup setIsFinished={setIsFinished}/>
      }
      <div className={`w-full grid gap-8 mx-auto mt-8 justify-items-center ${arr[value-2]}`} id="container"> 
      
      {
        data.map((box, index) => {
          return (
          //   <div  key={box.id} className="bg-red-300 h-24 w-24 text-center text-black text-lg px-8 py-8" draggable onDragStart={(e)=>onDragStart(e,box.boxValue)}
          //   onDragEnter={(e)=> onDragEnter(e,box.boxValue)}
          //   onDragEnd={onDragEnd}
          // >
          //       <p>{box.boxValue}</p>
          //   </div>
          <>
          <Box key={box.id} value={box.boxValue} onDragEnd={onDragEnd} onDragStart={onDragStart} onDragEnter={onDragEnter}/>
          </>
        )})
      }
      </div>
      </div>
  );
};

export default Grid;
