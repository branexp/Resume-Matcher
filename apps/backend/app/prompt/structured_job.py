PROMPT = """
You are a JSON extraction engine. Convert the raw job posting text below into a JSON object that strictly matches the provided schema.

- Output only the JSON object—no extra fields, text, comments, or formatting.
- Use the schema's key names and data types exactly.
- Dates must be in 'YYYY-MM-DD' format.
- All URLs must be valid URIs.
- Do not output Markdown, extra whitespace, or non-JSON content.

Schema:
{0}

Job Posting:
{1}
"""
