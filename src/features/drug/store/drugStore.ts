/* eslint-disable @typescript-eslint/no-empty-object-type */
import { create } from "zustand";

export interface DrugState {}

export const useDrugStore = create<DrugState>(() => ({
  // initial state
}));
