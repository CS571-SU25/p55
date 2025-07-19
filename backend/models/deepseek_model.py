from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage
from models.base_model import BaseModel
from utils.prompt_helpers import build_rating_prompt
from config import Config

class DeepSeekModel(BaseModel):
    def __init__(self, temperature: float = 0.7):
        # Configure LangChain's ChatOpenAI wrapper
        self.llm = ChatOpenAI(
            model_name="deepseek-chat",
            temperature=temperature,
            openai_api_key=Config.DEEPSEEK_API_KEY,
            openai_api_base="https://api.deepseek.com/v1"  # only this extra
            # don’t pass openai_api_type here unless your LangChain version explicitly needs it
        )

    def generate(self, prompt: str) -> str:
        resp = self.llm([HumanMessage(content=prompt)])
        return resp.content.strip()

    def rate(self, prompt: str, response: str) -> str:
        rating_prompt = build_rating_prompt(prompt, response)
        resp = self.llm([HumanMessage(content=rating_prompt)])
        return resp.content.strip()
