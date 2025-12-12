from typing import List, Optional
from pydantic import BaseModel


class ImprovementItem(BaseModel):
    suggestion: str
    lineNumber: Optional[int] = None
    section: Optional[str] = None


class ResumeAnalysisModel(BaseModel):
    details: str
    commentary: str
    improvements: List[ImprovementItem]
