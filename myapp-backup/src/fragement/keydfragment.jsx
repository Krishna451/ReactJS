import React from 'react'

class KeyedFragement extends React.Component{


    render(){

        return(

            <dl>
{

    this.props.items.map(item=>{

        <React.Fragment key={item.id}>
        <dt>{item.term}</dt>
        <dd>{item.description}</dd>
        </React.Fragment>
    })
}

            </dl>
        )

    }
}
export default KeyedFragement