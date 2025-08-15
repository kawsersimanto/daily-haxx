/* eslint-disable @typescript-eslint/no-empty-object-type */
import { create } from "zustand";

export interface ProfileState {}

export const useProfileStore = create<ProfileState>(() => ({
  // initial state
}));
