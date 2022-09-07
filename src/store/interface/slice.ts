import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type userInterfaceSlice = {
  isMobileMenuOpened: boolean,
  isMobileCartOpened: boolean,
}

const initialState: userInterfaceSlice = {
  isMobileMenuOpened: false,
  isMobileCartOpened: false,
}

export const userInterfaceSlice = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    setIsMobileMenuOpened(state, action: PayloadAction<boolean>) {
      state.isMobileMenuOpened = action.payload;
    },
    setIsMobileCartOpened(state, action: PayloadAction<boolean>) {
      state.isMobileCartOpened = action.payload
    }
  }
})

export default userInterfaceSlice.reducer;

export const { setIsMobileMenuOpened, setIsMobileCartOpened } = userInterfaceSlice.actions;