# routes/generate.py

from flask import Blueprint, request, jsonify
from services.ai_service import AIService

generate_bp = Blueprint("generate", __name__)
ai_service = AIService()   # uses DeepSeekModel by default

@generate_bp.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    prompt = data.get("prompt")
    if not prompt:
        return jsonify({"error": "Missing prompt"}), 400

    try:
        ai_response = ai_service.generate_response(prompt)
        rating     = ai_service.rate_response(prompt, ai_response)
        return jsonify({
            "prompt":         prompt,
            "ai_response":    ai_response,
            "rating_feedback": rating
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
