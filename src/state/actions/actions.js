import { MAKE_TEST_FALSE, MAKE_TEST_TRUE } from "./types";



    export const makeFalse = () => {
        return {
            type: MAKE_TEST_FALSE
        }
    }

    export const makeTrue = () => {
        return{
            type: MAKE_TEST_TRUE
        }
    }
