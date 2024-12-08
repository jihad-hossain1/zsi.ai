'use client'; // Required for client-side hooks

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { increment, decrement, incrementByAmount } from '@/lib/slices/counterSlices';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
     <div className='flex gap-3 items-center'>
     <button className='border p-2 rounded shadow-sm bg-gray-200 text-xs' onClick={() => dispatch(increment())}>Increment</button>
      <button className='border p-2 rounded shadow-sm bg-gray-200 text-xs' onClick={() => dispatch(decrement())}>Decrement</button>
      <button className='border p-2 rounded shadow-sm bg-gray-200 text-xs' onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
     </div>
    </div>
  );
}
