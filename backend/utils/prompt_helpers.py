def build_rating_prompt(prompt, response):
    return (
        f"Prompt: \"{prompt}\"\n\n"
        f"Response: \"{response}\"\n\n"
        f"Please rate the quality and helpfulness of this response from 1 to 10, and explain why."
    )
