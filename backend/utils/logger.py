"""API utilities module"""

class APIError(Exception):
    """Custom exception for API errors"""
    def __init__(self, message: str, status_code: int = 400):
        self.message = message
        self.status_code = status_code
        super().__init__(self.message)

class Logger:
    """Simple logging utility"""
    @staticmethod
    def log(message: str, level: str = "INFO"):
        print(f"[{level}] {message}")

    @staticmethod
    def error(message: str):
        Logger.log(message, "ERROR")

    @staticmethod
    def info(message: str):
        Logger.log(message, "INFO")

    @staticmethod
    def debug(message: str):
        Logger.log(message, "DEBUG")
