import React, {useState} from 'react'
import removeImg from './imagens/remove.png'
import addImg from './imagens/add.png'

function Tasklist() {

    const [task, setTask] = useState([])

    // task.map((index, item) => localStorage.setItem(index, item))

    const handleBtn = () => {
        const input = document.getElementById('inputText').value;
        document.getElementById('inputText').value = ''

        setTask(t => [...t, input])
    }


    const handleRemove = (index) => {
        setTask(task.filter((_, i) => i !== index))
    }


    return (
        <div className='container'>
            <h2>To do List</h2>
            <div className='inputArea'>
                <input type="text" id="inputText" placeholder='Type an task' onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleBtn()
                    }
                }}/>
                <button className='inputBtn' onClick={handleBtn}><img src={addImg} alt="add"/></button>
            </div>
            <div className='taskArea'>
                {task.map((item, index) => {
                    if (item.trim() !== '') {

                        return <div className='task'>
                                    <p className='taskName'  key={index}>{item}</p>
                                    <button className='taskRemoveBtn'  onClick={() => handleRemove(index)}>
                                        <img id="removeIcon" src={removeImg} alt="remove"/>
                                    </button>
                                </div>
                                
                    }
                })}
            </div>
        </div>
    )
}


export default Tasklist