import React from 'react'
import Grandchild from './Grandchild'

export const SomeContent = () => {

    const submit =(e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label>
                    Name:
                    <input type={"text"}/>
                </label>
                <input type={'submit'} />
            </form>
            <Grandchild />
        </div>
    )
}
