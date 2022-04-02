import Def from './default'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
const React = require('react')

export default function LessonHub() {
    const [ data, setData ] = useState(null)
    const [ subject, setSubject ] = useState('apis')
    const [ lesson, setLesson ] = useState(1)
    
    const prevClick = () => {
        if(lesson > 1){
            setLesson(lesson - 1)
        }
    }
    const nextClick = () => {
        if(lesson < /* Object.keys(data[subject]).length */ Object.keys(data).length - 2){
            setLesson(lesson + 1)
        }
    }
    const subjectChange = (e) => {
        setSubject(e.target.value)
        setLesson(1)
    }
    

    useEffect(() => {
        fetch('/lessons')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return (
       <Def>
           <main>
               <h1 style={{textAlign: 'center'}}>ALL YOUR LESSONS ARE BELONG TO US!</h1>
               <div>
                   <img style={{width: '20vw', marginLeft: '40vw'}} src="https://cdn.vox-cdn.com/thumbor/LkWqXsl11wI-1gU9OnoflNoWDVI=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22309695/all_your_base_are_belong_to_us.jpg" alt="Unknown Warlock" />
               </div>
               <div className='ui-container'>
                   <div className='user-info'>
                       <img alt='avatar' className='avatar-img' src='./assets/person.svg'/>
                       <p>user info goes here</p>
                        <div className='xp-bar'>
                           <img alt='current xp' src='./assets/XP-Bar.png' />
                        </div>
                   </div>
                   <form className='subject-select'>
                       <select className='selected-subject' id='subject' onChange={subjectChange} name='subject'>
                           <option value='apis'>API's</option>
                           <option value='react'>React</option>
                           <option value='sql'>SQL</option>
                       </select>
                   </form>
               </div>
               <div style={{margin: 'auto', textAlign: 'center'}}>
                   <div>
                       <h2 className='subject'>{!data ? 'Loading...' : data[lesson].topic}</h2>
                   </div>
                    <button onClick={prevClick} className='prev-btn'>
                            <img alt='previous button' className='prev-btn-img' src='../Images/caret-left.svg' />
                    </button>
                    <div className='lesson-container'>
<<<<<<< HEAD
                            <Link to={`/lesson${lesson - 1}`}>
                                <img alt={`lesson ${lesson - 1}`}className='lesson-img' src='..//123.svg'/>
                                <p className='lesson-name'>{!data ? 'Lesson 1' : data[lesson - 1].title}</p>
                            </Link>
                            <Link to={`/lesson${lesson}`}>
                                <img alt={`lesson ${lesson}`} className='lesson-img' src='server/public/assets/code-slash.svg'/>
                                <p className='lesson-name'>{!data ? 'Lesson 1' : data[lesson].title}</p>
                            </Link>
                            <Link to={`/lesson${lesson + 1}`}>
                                <img alt={`lesson ${lesson + 1}`} className='lesson-img' src='../Images/terminal.svg' />
=======
                            <Link to={`/lessons/${!data ? 'error':data[lesson - 1]._id}`}>
                                <img alt={`lesson ${lesson - 1}`}className='lesson-img' src='./assets/123.svg'/>
                                <p className='lesson-name'>{!data ? 'Lesson 1' : data[lesson - 1].title}</p>
                            </Link>
                            <Link to={`/lessons/${!data ? 'error':data[lesson]._id}`}>
                                <img alt={`lesson ${lesson}`} className='lesson-img' src='./assets/code-slash.svg'/>
                                <p className='lesson-name'>{!data ? 'Lesson 1' : data[lesson].title}</p>
                            </Link>
                            <Link to={`/lessons/${!data ? 'error':data[lesson + 1]._id}`}>
                                <img alt={`lesson ${lesson + 1}`} className='lesson-img' src='./assets/terminal.svg' />
>>>>>>> a8bb5be37907af131650db416a0f6d774cd37fca
                                <p className='lesson-name'>{!data ? 'Lesson 1' : data[lesson + 1].title}</p>
                            </Link>
                    </div>
                    <button onClick={nextClick} className='next-btn'>
                            <img alt='next button' className='next-btn-img' src='../Images/caret-right.svg' />
                    </button>

                    <Link to={`/lessons/${id}/new`}>
                    <button>Add Lesson</button>    
                    </Link>
                
                </div>
           </main>
       </Def>
   )
}