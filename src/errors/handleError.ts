import { Request, Response } from "express";
import { AppError } from "./AppError";


export const handleError = async (error: Error, req: Request, res: Response) => {

    if(error instanceof AppError){
        console.log(error)
        return res.status(error.statusCode).json({
            message: error.message
        })
    }

    console.log(error)

    return res.status(500).json({
        message: 'Internal server error'
    })
}