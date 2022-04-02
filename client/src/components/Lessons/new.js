const React = require('react')
const Def = require('../default')

function NewForm () {
    return (
        <Def>
          <main>
            <h1>Add a New Lesson</h1>
                <form method="POST" action="/lessons">
                    
                    <div className="form-group">
                        <label htmlFor="name">Lesson Subject</label>
                        <input className="form-control" id="subject" name="subject" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pic">Lesson Title</label>
                        <input className="form-control" id="title" name="title" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">Lesson Image</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="state">Lesson Content</label>
                        <input className="form-control" id="content" name="content" />
                    </div>

                        <input className="btn btn-primary" type="submit" value="Add Lesson" />
                </form>
          </main>
        </Def>
    )
}

module.exports = NewForm