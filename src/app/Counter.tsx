'use client'
import useCounter from './common/hooks/useCounter'

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter({ initialValue: 0, step: 2 })
    return (
        <div className='flex flex-col justify-center items-center h-screen gap-4'>
            <div>
                <p className='bg-white text-black font-bold text-2xl px-10 rounded-sm py-2'>{count}</p>
            </div>
            <div className='space-x-4'>
                <button
                    onClick={increment}
                    className='py-3 rounded-sm border px-3 bg-green-300 text-black cursor-pointer'>
                    Increment
                </button>
                <button
                    onClick={decrement}
                    className='py-3 rounded-sm border px-3 bg-red-300 text-black cursor-pointer'>
                    Decrement
                </button>
                <button
                    onClick={reset}
                    className='py-3 rounded-sm border px-6 bg-yellow-300 text-black cursor-pointer'>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter