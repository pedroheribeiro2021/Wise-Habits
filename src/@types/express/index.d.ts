declare global {
    namespace Express {
        interface Request {
            user: {
                id: string,
                token: string
            }
        }
    }
}

export {}