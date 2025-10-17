'use client'
import { useReducer } from 'react'

type State = {
    count: number
}

type Action =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' }

const UseReducer = () => {
    const initialState: State = {
        count: 0
    }

    const reducerFn = (state: State, action: Action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }

            case 'decrement':
                return { count: state.count - 1 }

            case 'reset':
                return { count: 0 }

            default: {
                return state
            }
        }
    }
    const [state, dispatch] = useReducer(reducerFn, initialState);
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-4'>
            <div>
                <p className='bg-white text-black font-bold text-2xl px-10 rounded-sm py-2'>{state.count}</p>
            </div>
            <div className='space-x-4'>
                <button
                    onClick={() => dispatch({ type: 'increment' })}
                    className='py-3 rounded-sm border px-3 bg-green-300 text-black cursor-pointer'>
                    Increment
                </button>
                <button
                    onClick={() => dispatch({ type: 'decrement' })}
                    className='py-3 rounded-sm border px-3 bg-red-300 text-black cursor-pointer'>
                    Decrement
                </button>
                <button
                    onClick={() => dispatch({ type: 'reset' })}
                    className='py-3 rounded-sm border px-6 bg-yellow-300 text-black cursor-pointer'>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default UseReducer