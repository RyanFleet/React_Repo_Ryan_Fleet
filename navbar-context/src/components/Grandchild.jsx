import { useContext } from 'react';
import MyContext from 'react'

const Grandchild = (props) => {
    const context = useContext(MyContext)
    return (
        <div>hello {context}</div>
    )
}

export default Grandchild