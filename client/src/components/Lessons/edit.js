const React = require('react')
const Def = require('../default.js')

function edit_form (data) {
    return (
      <Def>

        <main>

          <form method="POST" action={`/lessons/${data.id}?_method=PUT`}>
  
            <div className="row">
      
                <div className="form-group col-sm-6">
          
                    <label htmlFor="subject">Lesson Subject</label>
                    
                    <input 
                        className="form-control" 
                        id="subject" 
                        name="subject" 
                        value={data.lesson.name} 
                        required />
                </div>
      
                <div className="form-group col-sm-6">
          
                    <label htmlFor="title">Lesson Title</label>
          
                    <input 
                        className="form-control" 
                        id="title" 
                        name="title" 
                        value={data.lesson.name} 
                        required />

                </div>
            

            </div>
                
          </form>
                
        </main>
        
      </Def>
    )
}

module.exports = edit_form