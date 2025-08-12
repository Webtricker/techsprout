import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

type OtpState = {
  modalStatus: boolean;
  setModalStatus: (status: string) => void;
};

const useOtpState = create<OtpState>()(
  persist(
    immer((set) => ({
      modalStatus: false,
      setModalStatus: (status) =>
        set((state) => {
          state.modalStatus = (status === 'open' && true) || (status === 'close' && false);
        }),
    })),
    { name: 'otp-storage' }
  )
);

export { useOtpState };
