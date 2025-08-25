import { generateMatrix } from './matrixStates/generators/matrixGenerator';
import { multiplyMatrices } from './matrixStates/operations/matrixMath';

export interface MatrixData {
    dimensions: [number, number];
    values: number[][];
    id: string;
}

/*
Given a matrix A and B which is like:

A = [3,3]
B = [3,1]

Assume the matrices are compatable by default due to the fact that im hard-coding them
*/
export function createMatrices(A: [number, number], B: [number, number]) {

}