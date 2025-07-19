from flask import Flask
from flask_cors import CORS
from routes.generate import generate_bp

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Register blueprints
    app.register_blueprint(generate_bp)

    @app.route("/")
    def index():
        return "AIBox backend is live!"

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
