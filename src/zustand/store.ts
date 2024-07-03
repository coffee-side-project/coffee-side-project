import { create } from 'zustand';

interface TDefaultStore {
  yourState : any;
  yourAction : (val : any) => void;
}
export const DefaultStore = create<TDefaultStore>((set)=>({
  yourState : 'VALUE',
  yourAction : (val) => set( (state) => ({ yourState : state.yourState }) )
}))
