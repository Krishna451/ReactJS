import React from 'react'
import Columns from './columns'

class Table extends React.Component{

    render(){

        return(

            <table>
                <tr>
                    <Columns></Columns>
                </tr>

            </table>
        )
    }

}
export default Table;