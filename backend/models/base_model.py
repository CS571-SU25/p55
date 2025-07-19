from abc import ABC, abstractmethod

class BaseModel(ABC):
    @abstractmethod
    def generate(self, prompt: str) -> str:
        """Generate text from a user prompt."""
        pass

    @abstractmethod
    def rate(self, prompt: str, response: str) -> str:
        """Rate a response generated from a prompt."""
        pass
