export class AppError extends Error {
  statusCode: number;
  errors?: Record<string, string>;
  isOperational: boolean;

  constructor(
    message: string = "An unexpected error occurred",
    statusCode: number = 500,
    errors?: Record<string, string>,
    isOperational = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = isOperational;
  }
}
