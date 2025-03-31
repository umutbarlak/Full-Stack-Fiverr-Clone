import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const errorMiddleware: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Hata meydana geldi");
  console.error("Hata detatları : ", {
    message: err.message || "Bilinmeyen hata",
    status: err.status || 500,
    stack: (err as Error).stack || "Stack bilgisi yok",
  });

  const errorStatus: number = err.status || 500;
  const errMessage: string = err.message || "Üzgünüz birşeyler ters gitti";

  res
    .status(errorStatus)
    .json({ status: "error", statusCode: errorStatus, message: errMessage });

  return;
};

export default errorMiddleware;
