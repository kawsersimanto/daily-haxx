/* eslint-disable @typescript-eslint/no-empty-object-type */
import { create } from "zustand";

export interface CatalystState {}

export const useCatalystStore = create<CatalystState>(() => ({
  // initial state
}));
