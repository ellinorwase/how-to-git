import React, { Component } from 'react'
import '../css/commands.css'


export class commands extends Component {
    render() {
        return (

            <div className='wrapper1'>
                <h2>Kommandon</h2>
                <hr></hr>
                <div className='wrapper2'>
                    <div className='wrapper3'>
                    <div className='com1'>git add .</div>
                    <div className='com2'>git commit -m 'meddelande här'</div> 
                    <div className='com3'>git push</div>
                    </div>
                    <div className='wrapper4'>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                     est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius 
                     odi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                     is nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                      Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                       vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    </div>

                </div>
                <hr></hr>

            </div>
        )
    }
}

export default commands
