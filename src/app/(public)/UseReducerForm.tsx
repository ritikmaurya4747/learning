'use client'
import { ChangeEvent, useReducer } from 'react'

type State = {
    name: string,
    email: string,
    password: string,
}

type Action =
    | {
        type: 'UPDATE_FORM'
        payload: {
            field: keyof State
            value: string
        }
    }
    | { type: 'RESET_FORM' }

const UseReducerForm = () => {
    const initialState = {
        name: '',
        email: '',
        password: '',
    }

    const reducerFn = (state: State, action: Action) => {
        switch (action.type) {
            case 'UPDATE_FORM':
                return {
                    ...state,
                    [action.payload.field]: action.payload.value
                }

            case 'RESET_FORM':
                return initialState

            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducerFn, initialState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'UPDATE_FORM',
            payload: {
                field: e.target.name as keyof State,
                value: e.target.value
            }
        })
    }

    const handleReset = () => {
        dispatch({
            type: 'RESET_FORM'
        })
    }
    // console.log('Form data : ',state)
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-4 bg-gray-300'>
            <input
                type='text'
                name='name'
                placeholder='Enter Name'
                value={state.name}
                onChange={handleChange}
                className='border border-gray-800 placeholder:text-black'
            />
            <input
                type='email'
                name='email'
                placeholder='Enter Email'
                value={state.email}
                onChange={handleChange}
                className='border border-gray-800 placeholder:text-black'
            />
            <input
                type='password'
                name='password'
                placeholder='Enter Password'
                value={state.password}
                onChange={handleChange}
                className='border border-gray-800 placeholder:text-black'
            />
            <button
                onClick={handleReset}
                className='py-3 rounded-sm border px-6 bg-yellow-300 text-black cursor-pointer'>
                Reset
            </button>
        </div>
    )
}

export default UseReducerForm