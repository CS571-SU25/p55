from models.base_model import BaseModel
from models.deepseek_model import DeepSeekModel

class AIService:
    def __init__(self, model: BaseModel = None):
        # Allow swapping in other models later
        self.model = model or DeepSeekModel()

    def generate_response(self, prompt: str) -> str:
        """
        Generate an AI response for the given prompt.
        """
        return self.model.generate(prompt)

    def rate_response(self, prompt: str, response: str) -> str:
        """
        Rate the AI response according to the prompt.
        """
        return self.model.rate(prompt, response)
