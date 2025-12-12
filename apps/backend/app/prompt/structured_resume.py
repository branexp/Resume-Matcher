PROMPT = """
Extract structured JSON from the provided resume text, ensuring strict adherence to the given schema.

- Map each resume section to its corresponding schema field without adding or omitting information.
- For missing fields, use the schema's default empty value (empty string for strings, empty list for arrays).
- Preserve resume bullet points as brief, factual sentences in `description` arrays.
- Use 'Present' for current end dates. When dates are provided, use the 'YYYY-MM-DD' format.
- In the `additional` section, list items in this order: technical skills, languages, certifications/training, and awards, copying text exactly.
- Output only a single, fully valid JSON object matching the schema. No extra fields or commentary.

Schema:
```json
{0}
```

Resume:
```text
{1}
```

Note: Output must match the schema exactly. For each schema field:
- If no information is found, use the defined empty value.
- Do not add, remove, or rename fields.
"""
